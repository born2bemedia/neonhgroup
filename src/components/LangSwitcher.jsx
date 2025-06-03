import ArrowDown from "@/icons/other/ArrowDown";
import { useState } from "react";

const LangSwitcher = () => {
    const [currentLang, setCurrentLang] = useState("EN");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div style={{ position: "relative", display: "inline-block" }}>
            <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                style={{
                    padding: "0",
                    backgroundColor: "#F2F1F6",
                    color: "#fff",
                    border: "none",
                    borderRadius: "0",
                    cursor: "pointer",
                    padding: "14px 12px",
                    gap: "8px",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <img
                    src={`/images/${currentLang}.svg`}
                    style={{
                        width: "24px",
                        height: "24px",
                        objectFit: "contain",
                    }}
                />
                <span
                    style={{
                        color: "#020513",
                        fontSize: "16px",
                        lineHeight: "16px",
                    }}
                >
                    {currentLang}
                </span>
                <ArrowDown />
            </button>

            {isDropdownOpen && (
                <ul
                    translate="no"
                    style={{
                        position: "absolute",
                        top: "60px",
                        left: "0px",
                        backgroundColor: "#fff",
                        listStyle: "none",
                        padding: "0px",
                        margin: 0,
                        border: "1px solid #ECECEE",
                        borderRadius: "0px",
                        width: "110px",
                        zIndex: "999",
                    }}
                >
                    <li
                        style={{
                            padding: "12px",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            color: "#020513",
                            fontSize: "16px",
                        }}
                    >
                        <img src="/images/EN.svg" />
                        EN
                    </li>
                    <li
                        style={{
                            padding: "12px",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            color: "#020513",
                            fontSize: "16px",
                        }}
                    >
                        <img src="/images/DE.svg" />
                        DE
                    </li>
                    <li
                        style={{
                            padding: "12px",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            color: "#020513",
                            fontSize: "16px",
                        }}
                    >
                        <img src="/images/IT.svg" />
                        IT
                    </li>
                </ul>
            )}
        </div>
    );
};

export default LangSwitcher;
