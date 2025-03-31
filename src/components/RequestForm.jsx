import React, { useState, useId } from "react";
import { Formik, Form, Field, useFormikContext } from "formik";
import * as Yup from "yup";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import Select from "react-select";
import useCountryCode from "@/utils/useCountryCode";
import Link from "next/link";
import Snipper from "@/icons/loading/Snipper";
import "@/styles/request-form.scss";
import Dialog from "@/components/Dialog";
import { ShieldCheck } from "@/icons/other/ShieldCheck";

// CustomSelect компонент с добавлением класса _active
const CustomSelect = ({ name, options, ...props }) => {
    const { setFieldValue, setFieldTouched, errors, touched, values } =
        useFormikContext();
    const selectId = useId();

    const handleChange = (selectedOptions) => {
        setFieldValue(name, selectedOptions);
        setFieldTouched(name, true);
    };

    const formattedOptions = options.map((option) => ({
        ...option,
        className: values[name]?.some(
            (selected) => selected.value === option.value,
        )
            ? "_active"
            : "",
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

    const validationSchema = Yup.object({
        yourName: Yup.string().required("Please enter your full name"),
        company: Yup.string().required("Please enter your company"),
        website: Yup.string().required("Please enter your website"),
        industry: Yup.string().required("Please enter your industry"),
        phone: Yup.string().required("Please provide a phone number"),
        email: Yup.string()
            .email("Please enter your email address")
            .required("Please enter your email address"),
        are: Yup.array().min(1, "Please provide who you are"),
        message: Yup.string().required("Please enter your description"),
        agreeToPolicy: Yup.boolean().oneOf(
            [true],
            "Please agree to your data processing according to the Neon HR Group policies",
        ),
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

    const handleSubmit = async (
        values,
        { setSubmitting, resetForm, setStatus },
    ) => {
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
        {
            value: "hiring_talent_acquisition",
            label: "Hiring & Talent Acquisition",
        },
        {
            value: "employee_management_retention",
            label: "Employee Management & Retention",
        },
        { value: "payroll_hr_operations", label: "Payroll & HR Operations" },
        { value: "legal_compliance", label: "Legal & Compliance" },
        { value: "hr_strategy_consulting", label: "HR Strategy & Consulting" },
        { value: "not_sure_need_guidance", label: "Not Sure - Need Guidance" },
    ];

    return (
        <div className="request-form">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting, status, errors, touched }) => (
                    <div className="wrapper">
                        <Form className="form">
                            <div
                                className={`row ${touched.yourName && errors.yourName ? "invalid" : ""}`}
                            >
                                <Field name="yourName">
                                    {({ field, meta }) => (
                                        <>
                                            <span className="label">
                                                Full Name
                                                {meta.touched && meta.error && (
                                                    <div className="error">
                                                        ({meta.error})
                                                    </div>
                                                )}
                                            </span>
                                            <input
                                                {...field}
                                                type="text"
                                                placeholder="Enter your full name"
                                            />
                                        </>
                                    )}
                                </Field>
                            </div>

                            <div
                                className={`row ${touched.company && errors.company ? "invalid" : ""}`}
                            >
                                <Field name="company">
                                    {({ field, meta }) => (
                                        <>
                                            <span className="label">
                                                Company{" "}
                                                {meta.touched && meta.error && (
                                                    <div className="error">
                                                        ({meta.error})
                                                    </div>
                                                )}
                                            </span>
                                            <input
                                                {...field}
                                                type="text"
                                                placeholder="Enter your company"
                                            />
                                        </>
                                    )}
                                </Field>
                            </div>

                            <div
                                className={`row ${touched.website && errors.website ? "invalid" : ""}`}
                            >
                                <Field name="website">
                                    {({ field, meta }) => (
                                        <>
                                            <span className="label">
                                                Website{" "}
                                                {meta.touched && meta.error && (
                                                    <div className="error">
                                                        ({meta.error})
                                                    </div>
                                                )}
                                            </span>
                                            <input
                                                {...field}
                                                type="text"
                                                placeholder="Enter your website URL"
                                            />
                                        </>
                                    )}
                                </Field>
                            </div>

                            <div
                                className={`row ${touched.industry && errors.industry ? "invalid" : ""}`}
                            >
                                <Field name="industry">
                                    {({ field, meta }) => (
                                        <>
                                            <span className="label">
                                                Industry{" "}
                                                {meta.touched && meta.error && (
                                                    <div className="error">
                                                        ({meta.error})
                                                    </div>
                                                )}
                                            </span>
                                            <input
                                                {...field}
                                                type="text"
                                                placeholder="Enter your industry"
                                            />
                                        </>
                                    )}
                                </Field>
                            </div>

                            <div
                                className={`row _phone ${touched.phone && errors.phone ? "invalid" : ""}`}
                            >
                                <Field name="phone">
                                    {({ field, meta }) => (
                                        <>
                                            <span className="label">
                                                Phone{" "}
                                                {meta.touched && meta.error && (
                                                    <div className="error">
                                                        ({meta.error})
                                                    </div>
                                                )}
                                            </span>
                                            <PhoneInput
                                                country={countryCode}
                                                value={field.value}
                                                onChange={(value) =>
                                                    field.onChange({
                                                        target: {
                                                            name: "phone",
                                                            value,
                                                        },
                                                    })
                                                }
                                            />
                                        </>
                                    )}
                                </Field>
                            </div>

                            <div
                                className={`row ${touched.email && errors.email ? "invalid" : ""}`}
                            >
                                <Field name="email">
                                    {({ field, meta }) => (
                                        <>
                                            <span className="label">
                                                Email{" "}
                                                {meta.touched && meta.error && (
                                                    <div className="error">
                                                        ({meta.error})
                                                    </div>
                                                )}
                                            </span>
                                            <input
                                                {...field}
                                                type="email"
                                                placeholder="Enter your email"
                                            />
                                        </>
                                    )}
                                </Field>
                            </div>

                            <div
                                className={`row _select ${touched.are && errors.are ? "invalid" : ""}`}
                            >
                                <Field name="are">
                                    {({ field, form, meta }) => (
                                        <>
                                            <span className="label">
                                                Your Are{" "}
                                                {meta.touched && meta.error && (
                                                    <div className="error">
                                                        ({meta.error})
                                                    </div>
                                                )}
                                            </span>
                                            <CustomSelect
                                                name={field.name}
                                                options={options}
                                                value={field.value}
                                                onChange={(selectedOptions) =>
                                                    form.setFieldValue(
                                                        field.name,
                                                        selectedOptions,
                                                    )
                                                }
                                            />
                                        </>
                                    )}
                                </Field>
                            </div>

                            <div className="row _textarea">
                                <div className="textarea-container">
                                    <Field name="message">
                                        {({ field, meta }) => (
                                            <>
                                                <span className="label">
                                                    Case Description
                                                    {meta.touched &&
                                                        meta.error && (
                                                            <div className="error">
                                                                ({meta.error})
                                                            </div>
                                                        )}
                                                </span>
                                                <textarea
                                                    {...field}
                                                    placeholder="Please specify..."
                                                />
                                            </>
                                        )}
                                    </Field>
                                </div>
                            </div>

                            <div
                                className={`row _policy ${touched.agreeToPolicy && errors.agreeToPolicy ? "invalid" : ""}`}
                            >
                                <Field name="agreeToPolicy">
                                    {({ field, meta }) => (
                                        <>
                                            <label
                                                className={`checkbox-label ${field.value ? "_active" : ""}`}
                                            >
                                                <input
                                                    {...field}
                                                    type="checkbox"
                                                />
                                                <div>
                                                    I agree to the processing of
                                                    my data in accordance with
                                                    the{" "}
                                                    <Link href="/privacy-policy">
                                                        Privacy Policy
                                                    </Link>{" "}
                                                    and{" "}
                                                    <Link href="/terms-of-use">
                                                        Terms of Use
                                                    </Link>
                                                    .
                                                </div>
                                            </label>
                                            {meta.touched && meta.error && (
                                                <span className="areaError">
                                                    <p>{meta.error}</p>
                                                </span>
                                            )}
                                        </>
                                    )}
                                </Field>
                            </div>

                            <button
                                type="submit"
                                className="button"
                                disabled={isSubmitting}
                            >
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
                                    <span className="icon">
                                        <img
                                            src="/images/icon-form.svg"
                                            alt="icon"
                                        />
                                    </span>
                                    <span className="title">
                                        Thank you for reaching out to Neon HR
                                        Group!
                                    </span>
                                    <span className="text">
                                        Your request has been successfully
                                        submitted. Our team will review your
                                        inquiry and get back to you
                                        shortly.{" "}
                                    </span>
                                    <button
                                        className="button"
                                        onClick={() => window.location.reload()}
                                    >
                                        Back
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </Formik>
            <Dialog open={isSuccess} setOpen={setIsSuccess}>
                <section className="contentDialog">
                    <section className="contentDialogInfo">
                        <ShieldCheck />
                        <h3>Thank you for reaching out to Neon HR Group!</h3>
                        <p>
                            Your request has been successfully submitted. Our
                            team will review your inquiry and get back to you
                            shortly.
                        </p>
                    </section>
                    <Link href="/" className="dialogBtn">
                        Back to Home
                    </Link>
                </section>
            </Dialog>
        </div>
    );
}

export default RequestForm;
