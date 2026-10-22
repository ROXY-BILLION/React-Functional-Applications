import { useState, useEffect } from "react";
import "./Clock.css";

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, []);

    return (
        <main className="clock-page">
            <div className="clock-card">
                <div className="clock-top">
                    <div className="clock-brand">
                        <span className="clock-brand-icon">◷</span>
                        CHRONO<span className="brand-dot">.</span>
                    </div>

                    <div className="live-status">
                        <span className="live-dot"></span>
                        LIVE
                    </div>
                </div>

                <div className="clock-decoration">
                    <div className="orbit orbit-one"></div>
                    <div className="orbit orbit-two"></div>
                    <div className="orbit-center">
                        <span className="orbit-core"></span>
                    </div>
                </div>

                <div className="clock-content">
                    <p className="clock-label">YOUR LOCAL TIME</p>

                    <p className="time">
                        {time.toLocaleTimeString("en-GB", {
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit",
                            hour12: false,
                        })}
                    </p>

                    <div className="clock-divider">
                        <span></span>
                        <span className="divider-center"></span>
                        <span></span>
                    </div>

                    <p className="clock-date">
                        {time.toLocaleDateString("en-GB", {
                            weekday: "long",
                            day: "2-digit",
                            month: "long",
                            year: "numeric",
                        })}
                    </p>

                    <div className="clock-footer">
                        <div>
                            <span className="footer-label">TIME FORMAT</span>
                            <strong>24-HOUR</strong>
                        </div>

                        <div className="timezone">
                            <span className="footer-label">TIMEZONE</span>
                            <strong>
                                {Intl.DateTimeFormat()
                                    .resolvedOptions()
                                    .timeZone}
                            </strong>
                        </div>
                    </div>
                </div>
            </div>

            <p className="clock-signature">
                EVERY SECOND COUNTS <span>—</span> CHRONO STUDIO
            </p>
        </main>
    );
}

export default Clock;
