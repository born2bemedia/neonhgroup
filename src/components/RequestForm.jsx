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
import { excludedCountries } from "@/utils/countries";
import { useTranslations } from "next-intl";

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
    const t = useTranslations("requestForm");

    const countryCode = useCountryCode();
    const [isSuccess, setIsSuccess] = useState(false);

    const validationSchema = Yup.object({
        yourName: Yup.string().required(t("errors.yourName")),
        company: Yup.string().required(t("errors.company")),
        website: Yup.string().required(t("errors.website")),
        industry: Yup.string().required(t("errors.industry")),
        phone: Yup.string().required(t("errors.phone")),
        email: Yup.string()
            .email(t("errors.email"))
            .required(t("errors.email")),
        are: Yup.array().min(1, t("errors.are")),
        message: Yup.string().required(t("errors.message")),
        agreeToPolicy: Yup.boolean().oneOf([true], t("errors.agreeToPolicy")),
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
            label: t("options.hiring_talent_acquisition"),
        },
        {
            value: "employee_management_retention",
            label: t("options.employee_management_retention"),
        },
        {
            value: "payroll_hr_operations",
            label: t("options.payroll_hr_operations"),
        },
        { value: "legal_compliance", label: t("options.legal_compliance") },
        {
            value: "hr_strategy_consulting",
            label: t("options.hr_strategy_consulting"),
        },
        {
            value: "not_sure_need_guidance",
            label: t("options.not_sure_need_guidance"),
        },
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
                                                {t("fields.yourName.label")}
                                                {meta.touched && meta.error && (
                                                    <div className="error">
                                                        ({meta.error})
                                                    </div>
                                                )}
                                            </span>
                                            <input
                                                {...field}
                                                type="text"
                                                placeholder={t(
                                                    "fields.yourName.placeholder",
                                                )}
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
                                                {t("fields.company.label")}
                                                {meta.touched && meta.error && (
                                                    <div className="error">
                                                        ({meta.error})
                                                    </div>
                                                )}
                                            </span>
                                            <input
                                                {...field}
                                                type="text"
                                                placeholder={t(
                                                    "fields.company.placeholder",
                                                )}
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
                                                {t("fields.website.label")}
                                                {meta.touched && meta.error && (
                                                    <div className="error">
                                                        ({meta.error})
                                                    </div>
                                                )}
                                            </span>
                                            <input
                                                {...field}
                                                type="text"
                                                placeholder={t(
                                                    "fields.website.placeholder",
                                                )}
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
                                                {t("fields.industry.label")}
                                                {meta.touched && meta.error && (
                                                    <div className="error">
                                                        ({meta.error})
                                                    </div>
                                                )}
                                            </span>
                                            <input
                                                {...field}
                                                type="text"
                                                placeholder={t(
                                                    "fields.industry.placeholder",
                                                )}
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
                                                {t("fields.phone.label")}
                                                {meta.touched && meta.error && (
                                                    <div className="error">
                                                        ({meta.error})
                                                    </div>
                                                )}
                                            </span>
                                            <PhoneInput
                                                country={countryCode}
                                                excludeCountries={
                                                    excludedCountries
                                                }
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
                                                {t("fields.email.label")}
                                                {meta.touched && meta.error && (
                                                    <div className="error">
                                                        ({meta.error})
                                                    </div>
                                                )}
                                            </span>
                                            <input
                                                {...field}
                                                type="email"
                                                placeholder={t(
                                                    "fields.email.placeholder",
                                                )}
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
                                                {t("fields.are.label")}
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
                                                    {t("fields.message.label")}
                                                    {meta.touched &&
                                                        meta.error && (
                                                            <div className="error">
                                                                ({meta.error})
                                                            </div>
                                                        )}
                                                </span>
                                                <textarea
                                                    {...field}
                                                    placeholder={t(
                                                        "fields.message.placeholder",
                                                    )}
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
                                                    {t(
                                                        "fields.agreeToPolicy.label.0",
                                                    )}
                                                    {""}
                                                    <Link href="/privacy-policy">
                                                        {t(
                                                            "fields.agreeToPolicy.label.1",
                                                        )}
                                                    </Link>{" "}
                                                    {t(
                                                        "fields.agreeToPolicy.label.2",
                                                    )}
                                                    {""}
                                                    <Link href="/terms-of-use">
                                                        {t(
                                                            "fields.agreeToPolicy.label.3",
                                                        )}
                                                    </Link>
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
                                {t("submit")}
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
                                        {t("thankYou.title")}
                                    </span>
                                    <span className="text">
                                        {t("thankYou.text")}
                                    </span>
                                    <button
                                        className="button"
                                        onClick={() => window.location.reload()}
                                    >
                                        {t("thankYou.back")}
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
                        <h3>{t("thankYou.title")}</h3>
                        <p>{t("thankYou.text")}</p>
                    </section>
                    <Link href="/" className="dialogBtn">
                        {t("thankYou.back")}
                    </Link>
                </section>
            </Dialog>
        </div>
    );
}

export default RequestForm;
