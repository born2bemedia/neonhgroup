import React, { useState, useId } from "react";
import { Formik, Form, Field, useFormikContext } from "formik";
import * as Yup from "yup";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import Select from "react-select";
import useCountryCode from "@/utils/useCountryCode";
import Link from "next/link";
import Snipper from "@/icons/loading/Snipper";

// CustomSelect компонент с добавлением класса _active
const CustomSelect = ({ name, options, ...props }) => {
    const { setFieldValue, setFieldTouched, errors, touched, values } = useFormikContext();
    const selectId = useId();

    const handleChange = (selectedOptions) => {
        setFieldValue(name, selectedOptions);
        setFieldTouched(name, true);
    };

    const formattedOptions = options.map(option => ({
        ...option,
        className: values[name]?.some(selected => selected.value === option.value) ? "_active" : ""
    }));

    return (
        <div className="wrapper-select">
            <Select
                {...props}
                options={formattedOptions}
                onChange={handleChange}
                value={values[name]}
                isMulti
                className={touched[name] && errors[name] ? "invalid" : ""}
                classNamePrefix="react-select"
                instanceId={selectId}
                placeholder=""
                getOptionLabel={(e) => (
                    <div className={e.className}>{e.label}</div>
                )}
            />
        </div>
    );
};

function RequestForm() {
    const countryCode = useCountryCode();
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFormVisible, setIsFormVisible] = useState(true);

    const validationSchema = Yup.object({
        yourName: Yup.string().required("The field is required."),
        company: Yup.string().required("The field is required."),
        website: Yup.string().required("The field is required."),
        industry: Yup.string().required("The field is required."),
        phone: Yup.string().required("The field is required."),
        email: Yup.string().email("Invalid email address.").required("The field is required."),
        are: Yup.array().min(1, "The field is required."),
        message: Yup.string().required("The field is required."),
        agreeToPolicy: Yup.boolean().oneOf([true], "You must agree to the Privacy Policy."),
    });

    const initialValues = {
        yourName: "",
        company: "",
        website: "",
        industry: "",
        phone: "",
        email: "",
        message: "",
        are: [],
        agreeToPolicy: false,
    };

    const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
        try {
            const response = await fetch("/api/emails/request", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });
            if (response.ok) {
                setTimeout(() => {
                    setSubmitting(false);
                    resetForm();
                    setStatus({ success: true });
                    setIsSuccess(true);
                    setIsFormVisible(false);
                }, 400);
            } else {
                setStatus({ success: false });
            }
        } catch (error) {
            console.error(error);
            setStatus({ success: false });
            setSubmitting(false);
        }
    };

    const options = [
        { value: "hiring_talent_acquisition", label: "Hiring & Talent Acquisition" },
        { value: "employee_management_retention", label: "Employee Management & Retention" },
        { value: "payroll_hr_operations", label: "Payroll & HR Operations" },
        { value: "legal_compliance", label: "Legal & Compliance" },
        { value: "hr_strategy_consulting", label: "HR Strategy & Consulting" },
        { value: "not_sure_need_guidance", label: "Not Sure - Need Guidance" },
    ];

    return (
        <div className="request-form">
            {isFormVisible ? (
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting, status, errors, touched }) => (
                        <div className="wrapper">
                            <Form className="form">

                                <div className={`row ${touched.yourName && errors.yourName ? "invalid" : ""}`}>
                                    <span className="label">Full Name</span>
                                    <Field name="yourName">
                                        {({ field }) => <input {...field} type="text" placeholder="Enter your full name" />}
                                    </Field>
                                </div>

                                <div className={`row ${touched.company && errors.company ? "invalid" : ""}`}>
                                    <span className="label">Company</span>
                                    <Field name="company">
                                        {({ field }) => <input {...field} type="text" placeholder="Enter your company" />}
                                    </Field>
                                </div>

                                <div className={`row ${touched.website && errors.website ? "invalid" : ""}`}>
                                    <span className="label">Website</span>
                                    <Field name="website">
                                        {({ field }) => <input {...field} type="text" placeholder="Enter your website URL" />}
                                    </Field>
                                </div>

                                <div className={`row ${touched.industry && errors.industry ? "invalid" : ""}`}>
                                    <span className="label">Industry</span>
                                    <Field name="industry">
                                        {({ field }) => <input {...field} type="text" placeholder="Enter your industry" />}
                                    </Field>
                                </div>

                                <div className={`row _phone ${touched.phone && errors.phone ? "invalid" : ""}`}>
                                    <span className="label">Phone</span>
                                    <Field name="phone">
                                        {({ field }) => (
                                            <PhoneInput
                                                country={countryCode}
                                                value={field.value}
                                                onChange={(value) => field.onChange({ target: { name: "phone", value } })}
                                            />
                                        )}
                                    </Field>
                                </div>

                                <div className={`row ${touched.email && errors.email ? "invalid" : ""}`}>
                                    <span className="label">Email</span>
                                    <Field name="email">
                                        {({ field }) => <input {...field} type="email" placeholder="Enter your email" />}
                                    </Field>
                                </div>

                                <div className={`row _select ${touched.are && errors.are ? "invalid" : ""}`}>
                                    <span className="label">Your Are</span>
                                    <Field name="are">
                                        {({ field, form }) => (
                                            <CustomSelect
                                                name={field.name}
                                                options={options}
                                                value={field.value}
                                                onChange={(selectedOptions) => form.setFieldValue(field.name, selectedOptions)}
                                            />
                                        )}
                                    </Field>
                                </div>

                                <div className="row _textarea">
                                    <div className="textarea-container">
                                        <span className="label">Case Description</span>
                                        <Field name="message">
                                            {({ field }) => <textarea {...field} placeholder="Please specify..." />}
                                        </Field>
                                    </div>
                                </div>

                                <div className={`row _policy ${touched.agreeToPolicy && errors.agreeToPolicy ? "invalid" : ""}`}>
                                    <Field name="agreeToPolicy">
                                        {({ field }) => (
                                            <label className={`checkbox-label ${field.value ? "_active" : ""}`}>
                                                <input {...field} type="checkbox" />
                                                <span>
                                                    I agree to the processing of my data in accordance with the <Link href="/privacy-policy">Privacy Policy</Link> and <Link href="/terms-of-use">Terms of Use</Link>.
                                                </span>
                                            </label>
                                        )}
                                    </Field>
                                </div>

                                {Object.keys(errors).length > 0 && (
                                    <span className="general-error">Please correct the errors above.</span>
                                )}

                                <button type="submit" className="button" disabled={isSubmitting}>
                                    Submit
                                </button>
                                {isSubmitting && (
                                    <div className="loading-icon">
                                        <Snipper />
                                    </div>
                                )}
                            </Form>
                            {status && status.success && (
                                <div className="success-message">
                                    <div className="success-message__wrapper">
                                        <span className="icon"><img src="/images/icon-form.svg" alt="icon" /></span>
                                        <span className="title">Thank you for reaching out to Neon HR Group!</span>
                                        <span className="text">Your request has been successfully submitted. Our team will review your inquiry and get back to you shortly. </span>
                                        <button
                                            className="button"
                                            onClick={() => window.location.reload()}
                                        >
                                            Back to Home
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </Formik>
            ) : (
                <div className="success-message">
                    <div className="success-message__wrapper">
                        <span className="icon"><img src="/images/icon-form.svg" alt="icon" /></span>
                        <span className="title">Thank you for reaching out to Neon HR Group!</span>
                        <span className="text">Your request has been successfully submitted. Our team will review your inquiry and get back to you shortly. </span>
                        <button
                            className="button"
                            onClick={() => window.location.reload()}
                        >
                            Back to Home
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default RequestForm;