import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import nav from "../Projects/pages.module.css";
import styles from "./waiwai.module.css";

// SMS opt-in page for WaiWaiFund operational alerts.
// This form does not transmit data anywhere: the only recipient of these
// messages is the account owner, who enables the number in the WaiWaiFund
// console. The page exists to document the consent language and opt-in flow.

const WaiWaiAlerts = () => {
    const [phone, setPhone] = useState("");
    const [consent, setConsent] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!consent || !phone.trim()) return;
        setSubmitted(true);
    };

    return <>
        <div className={nav.menu}>
            <nav>
                <ul className={nav.navList}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/waiwai-privacy">Privacy &amp; Terms</Link></li>
                </ul>
            </nav>
        </div>

        <div className={styles.page}>
            <div className={styles.content}>
                <h1 className={styles.title}>WaiWaiFund Alerts</h1>
                <p className={styles.subtitle}>SMS opt-in for operational alerts</p>

                <p className={styles.paragraph}>
                    WaiWaiFund is a personal automated trading monitor owned and operated by Evan Denmark.
                    It sends text-message alerts about its own operation: emergency halts, risk-limit
                    breaches, and status confirmations. Messages are sent only to the account owner's
                    phone number. This is not a marketing program and no one else receives messages.
                </p>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <label className={styles.label} htmlFor="waiwai-phone">Mobile phone number</label>
                    <input
                        id="waiwai-phone"
                        className={styles.input}
                        type="tel"
                        inputMode="tel"
                        placeholder="+1 808 555 0100"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        disabled={submitted}
                    />

                    <div className={styles.consentRow}>
                        <input
                            id="waiwai-consent"
                            className={styles.checkbox}
                            type="checkbox"
                            checked={consent}
                            onChange={(e) => setConsent(e.target.checked)}
                            disabled={submitted}
                        />
                        <label className={styles.consentText} htmlFor="waiwai-consent">
                            By entering your phone number and checking this box, you agree to receive
                            operational alert text messages from WaiWaiFund, a personal trading monitor
                            owned and operated by Evan Denmark. Messages are sent only to the account owner.
                            Message frequency varies, typically fewer than 10 per month. Message and data
                            rates may apply. Reply STOP to unsubscribe or HELP for help. Mobile information
                            will not be shared with third parties or affiliates for marketing or promotional
                            purposes. See the <Link to="/waiwai-privacy">Privacy Policy</Link> and{" "}
                            <Link to="/waiwai-privacy#terms">Terms</Link>.
                        </label>
                    </div>

                    <button className={styles.button} type="submit" disabled={submitted || !consent || !phone.trim()}>
                        Enable alerts
                    </button>

                    {submitted && (
                        <div className={styles.confirmation}>
                            Thank you. Alerts for this number are enabled by the account owner in the
                            WaiWaiFund console. Reply STOP to any message to unsubscribe at any time.
                        </div>
                    )}
                </form>

                <h2 className={styles.heading}>What you will receive</h2>
                <ul className={styles.list}>
                    <li>Emergency halt notices, for example when a daily loss limit is reached.</li>
                    <li>Risk-limit and connectivity warnings.</li>
                    <li>Confirmations of commands you send by text (STATUS, STOP, ACK).</li>
                </ul>

                <h2 className={styles.heading}>Example message</h2>
                <p className={styles.fine}>
                    "WAIWAI HALT: daily loss limit hit on instance kx-weather-01. All orders cancelled.
                    Reply STATUS or STOP."
                </p>

                <h2 className={styles.heading}>Opting out and help</h2>
                <p className={styles.paragraph}>
                    Reply <b>STOP</b> to any message to stop receiving alerts. Reply <b>HELP</b> for
                    assistance, or contact evanlewisdenmark [at] gmail.com.
                </p>

                <p className={styles.fine}>
                    Message and data rates may apply. Carriers are not liable for delayed or undelivered
                    messages. Read the full <Link to="/waiwai-privacy">Privacy Policy and Terms</Link>.
                </p>
            </div>
        </div>
    </>
}

export default WaiWaiAlerts;
