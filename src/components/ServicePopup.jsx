"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { usePopup } from "@/context/PopupsContext";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import useCountryCode from "@/utils/useCountryCode";
import ArrowRight from "@/icons/slider/ArrowRight";
import CloseIcon from "@/icons/other/CloseIcon";
import Snipper from "@/icons/loading/Snipper";
import Link from "next/link";
import { excludedCountries } from "@/utils/countries";
/* import clsx from "clsx"; */

const ServicePopup = () => {
    const { servicePopupDisplay, setServicePopupDisplay, currentService } =
        usePopup();
    const countryCode = useCountryCode();
    const [isSuccess, setIsSuccess] = useState(false);

    const [checkedPhone, setCheckedPhone] = useState(false);
    const [checkedEmail, setCheckedEmail] = useState(false);

    if (!servicePopupDisplay) return null;

    const validationSchema = Yup.object({
        firstName: Yup.string().required("The field is required."),
        company: Yup.string().required("The field is required."),
        website: Yup.string().required("The field is required."),
        industry: Yup.string().required("The field is required."),
        email: Yup.string()
            .email("Please enter a valid email address.")
            .required("The field is required."),
        phone: Yup.string().required("The field is required."),
        message: Yup.string(),
        agreeToPolicy: Yup.boolean().oneOf(
            [true],
            "You must agree to the privacy policy.",
        ),
    });

    const initialValues = {
        firstName: "",
        company: "",
        website: "",
        industry: "",
        email: "",
        phone: "",
        message: "",
        agreeToPolicy: false,
        service: `${currentService} Request`,
    };

    const closePopup = (resetForm) => {
        setServicePopupDisplay(false);
        if (resetForm) {
            resetForm();
        }
        setIsSuccess(false);
    };

    const handleSubmit = async (
        values,
        { setSubmitting, resetForm, setStatus },
    ) => {
        const valuesWithService = {
            ...values,
            service: `${currentService} Request`,
        };

        try {
            const response = await fetch("/api/emails/order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(valuesWithService),
            });

            if (response.ok) {
                setSubmitting(false);
                setIsSuccess(true);
                resetForm(); // Сброс формы после успешной отправки
            } else {
                setStatus({ success: false });
                setIsSuccess(false);
            }
        } catch (error) {
            console.error(error);
            setStatus({ success: false });
            setSubmitting(false);
            setIsSuccess(false);
        }
    };

    const handlePhoneChange = () => {
        setCheckedPhone((prev) => !prev);
    };

    const handleEmailChange = () => {
        setCheckedEmail((prev) => !prev);
    };

    return (
        <div
            className={`request-popup-wrap ${servicePopupDisplay ? "opened" : ""}`}
        >
            <div className="overlay" onClick={() => closePopup(null)}></div>
            <div className="popup-inner">
                <div className="order-popup">
                    <div className="order-popup__content">
                        <div className="order-popup__top">
                            <h2 className="order-popup__title">Request Form</h2>
                            <button
                                className="order-popup__close"
                                onClick={() => closePopup(null)}
                                aria-label="Close popup"
                            >
                                <CloseIcon />
                            </button>
                        </div>

                        <div
                            className={`order-popup__form ${isSuccess ? "hidden" : ""}`}
                        >
                            <div className="request-form">
                                <div className="wrapper">
                                    <Formik
                                        initialValues={initialValues}
                                        validationSchema={validationSchema}
                                        onSubmit={(values, actions) =>
                                            handleSubmit(values, actions)
                                        }
                                    >
                                        {({
                                            isSubmitting,
                                            status,
                                            touched,
                                            errors,
                                            resetForm,
                                            setFieldValue,
                                            values,
                                        }) => (
                                            <Form className="form">
                                                <Field
                                                    type="hidden"
                                                    name="service"
                                                    value={`${currentService} Request`}
                                                />
                                                <div className="row">
                                                    <div className="label">
                                                        Full Name
                                                    </div>
                                                    <Field
                                                        name="firstName"
                                                        type="text"
                                                        placeholder="Your name"
                                                        className={
                                                            touched.firstName &&
                                                            errors.firstName
                                                                ? "invalid"
                                                                : ""
                                                        }
                                                    />
                                                </div>

                                                <div className="row">
                                                    <div className="label">
                                                        Company
                                                    </div>
                                                    <Field
                                                        name="company"
                                                        type="text"
                                                        placeholder="Company"
                                                        className={
                                                            touched.company &&
                                                            errors.company
                                                                ? "invalid"
                                                                : ""
                                                        }
                                                    />
                                                </div>

                                                <div className="row">
                                                    <div className="label">
                                                        Website
                                                    </div>
                                                    <Field
                                                        name="website"
                                                        type="text"
                                                        placeholder="Website"
                                                        className={
                                                            touched.website &&
                                                            errors.website
                                                                ? "invalid"
                                                                : ""
                                                        }
                                                    />
                                                </div>

                                                <div className="row">
                                                    <div className="label">
                                                        Industry
                                                    </div>
                                                    <Field
                                                        name="industry"
                                                        type="text"
                                                        placeholder="industry"
                                                        className={
                                                            touched.industry &&
                                                            errors.industry
                                                                ? "invalid"
                                                                : ""
                                                        }
                                                    />
                                                </div>

                                                <div className="row">
                                                    <div className="label">
                                                        Phone
                                                    </div>
                                                    <PhoneInput
                                                        country={countryCode}
                                                        value={values.phone} // Обратите внимание на это
                                                        excludeCountries={
                                                            excludedCountries
                                                        }
                                                        onChange={(value) =>
                                                            setFieldValue(
                                                                "phone",
                                                                value,
                                                            )
                                                        }
                                                        placeholder="Your phone"
                                                        className={
                                                            touched.phone &&
                                                            errors.phone
                                                                ? "invalid"
                                                                : ""
                                                        }
                                                    />
                                                    <label
                                                        className={`checkbox-label ${checkedPhone ? "_active" : ""}`}
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            checked={
                                                                checkedPhone
                                                            }
                                                            onChange={
                                                                handlePhoneChange
                                                            }
                                                            className="hidden"
                                                        />
                                                        Prefferable
                                                    </label>
                                                </div>

                                                <div className="row">
                                                    <div className="label">
                                                        Email
                                                    </div>
                                                    <Field
                                                        name="email"
                                                        type="email"
                                                        placeholder="Email"
                                                        className={
                                                            touched.email &&
                                                            errors.email
                                                                ? "invalid"
                                                                : ""
                                                        }
                                                    />
                                                    <label
                                                        className={`checkbox-label ${checkedEmail ? "_active" : ""}`}
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            checked={
                                                                checkedEmail
                                                            }
                                                            onChange={
                                                                handleEmailChange
                                                            }
                                                            className="hidden"
                                                        />
                                                        Prefferable
                                                    </label>
                                                </div>
                                                <div className="row _textarea">
                                                    <div className="textarea-container">
                                                        <label>
                                                            Case Description
                                                        </label>
                                                        <Field name="message">
                                                            {({
                                                                field,
                                                                form,
                                                            }) => (
                                                                <textarea
                                                                    {...field}
                                                                    placeholder="Explain why you want to join our team."
                                                                    className={
                                                                        form
                                                                            .touched
                                                                            .message &&
                                                                        form
                                                                            .errors
                                                                            .message
                                                                            ? "invalid"
                                                                            : ""
                                                                    }
                                                                />
                                                            )}
                                                        </Field>
                                                    </div>
                                                </div>
                                                <div className="row _policy">
                                                    <Field name="agreeToPolicy">
                                                        {({ field, form }) => (
                                                            <div className="wrapper">
                                                                <label
                                                                    className={`checkbox-label ${field.value ? "_active" : ""} ${
                                                                        form
                                                                            .touched
                                                                            .agreeToPolicy &&
                                                                        form
                                                                            .errors
                                                                            .agreeToPolicy
                                                                            ? "invalid"
                                                                            : ""
                                                                    }`}
                                                                >
                                                                    <input
                                                                        {...field}
                                                                        type="checkbox"
                                                                        checked={
                                                                            field.value
                                                                        }
                                                                        className={
                                                                            form
                                                                                .touched
                                                                                .agreeToPolicy &&
                                                                            form
                                                                                .errors
                                                                                .agreeToPolicy
                                                                                ? "invalid"
                                                                                : ""
                                                                        }
                                                                    />
                                                                    <span>
                                                                        I agree
                                                                        to the
                                                                        processing
                                                                        of my
                                                                        data in
                                                                        accordance
                                                                        with the{" "}
                                                                        <Link href="/privacy-policy">
                                                                            Privacy
                                                                            Policy
                                                                        </Link>{" "}
                                                                        and{" "}
                                                                        <Link href="/terms-of-use">
                                                                            Terms
                                                                            of
                                                                            Use
                                                                        </Link>
                                                                        .
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        )}
                                                    </Field>
                                                </div>

                                                {Object.keys(errors).length >
                                                    0 &&
                                                    touched && (
                                                        <span className="general-error">
                                                            This field is
                                                            required.
                                                        </span>
                                                    )}

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
                                        )}
                                    </Formik>
                                    {isSuccess && (
                                        <div className="success-message">
                                            <div className="success-message__wrapper">
                                                <span className="icon">
                                                    <img
                                                        src="/images/icon-form.svg"
                                                        alt="icon"
                                                    />
                                                </span>
                                                <span className="title">
                                                    Thank you for reaching out
                                                    to Neon HR Group!
                                                </span>
                                                <span className="text">
                                                    Your request has been
                                                    successfully submitted. Our
                                                    team will review your
                                                    inquiry and get back to you
                                                    shortly.{" "}
                                                </span>
                                                <button
                                                    className="button"
                                                    onClick={() =>
                                                        window.location.reload()
                                                    }
                                                >
                                                    Back to Home
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicePopup;
