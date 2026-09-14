import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import nav from "../Projects/pages.module.css";
import styles from "./waiwai.module.css";

const WaiWaiPrivacy = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const el = document.getElementById(hash.slice(1));
            if (el) el.scrollIntoView();
        }
    }, [hash]);

    return <>
        <div className={nav.menu}>
            <nav>
                <ul className={nav.navList}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/waiwai-alerts">Alerts opt-in</Link></li>
                </ul>
            </nav>
        </div>

        <div className={styles.page}>
            <div className={styles.content}>
                <h1 className={styles.title}>WaiWaiFund Alerts</h1>
                <p className={styles.subtitle}>SMS Privacy Policy and Terms. Effective 2026-09-13.</p>

                <h2 className={styles.heading} id="privacy">Privacy Policy</h2>

                <p className={styles.paragraph}>
                    <b>Who we are.</b> WaiWaiFund is a personal automated trading monitor owned and operated by
                    Evan Denmark ("we", "us"). The WaiWaiFund SMS program sends operational alerts about the
                    monitor's own activity to the account owner.
                </p>

                <p className={styles.paragraph}>
                    <b>What we collect.</b> A mobile phone number, entered on the{" "}
                    <Link to="/waiwai-alerts">opt-in page</Link> together with express consent to receive
                    text messages, and the content of any text messages sent to our number (for example
                    STOP, HELP, STATUS, or ACK).
                </p>

                <p className={styles.paragraph}>
                    <b>How we use it.</b> Solely to deliver operational alert messages and to respond to
                    commands sent by text. We do not use phone numbers for marketing or promotional purposes.
                </p>

                <p className={styles.paragraph}>
                    <b>Sharing.</b> Mobile information will not be shared with third parties or affiliates
                    for marketing or promotional purposes. Text messaging originator opt-in data and consent
                    will not be shared with any third parties. Our messaging provider (Twilio) processes
                    messages only as necessary to deliver them.
                </p>

                <p className={styles.paragraph}>
                    <b>Retention.</b> Phone numbers are kept only while alerts are enabled and are removed when
                    you opt out.
                </p>

                <p className={styles.paragraph}>
                    <b>Your choices.</b> Reply <b>STOP</b> to any message to opt out at any time. Reply{" "}
                    <b>HELP</b> for assistance. You may also contact evanlewisdenmark [at] gmail.com.
                </p>

                <h2 className={styles.heading} id="terms">Terms of the SMS Program</h2>

                <ol className={styles.list}>
                    <li>
                        <b>Program description.</b> WaiWaiFund Alerts sends operational text messages, such as
                        emergency halt notices, risk-limit warnings, and confirmations of commands sent by text.
                    </li>
                    <li>
                        <b>Eligibility.</b> Messages are sent only to the account owner's phone number, entered
                        with express consent on the opt-in page.
                    </li>
                    <li>
                        <b>Frequency.</b> Message frequency varies with system activity and is typically fewer
                        than 10 messages per month.
                    </li>
                    <li>
                        <b>Cost.</b> Message and data rates may apply according to your mobile carrier plan.
                    </li>
                    <li>
                        <b>Opt out.</b> Reply <b>STOP</b> to cancel at any time. You will receive one final
                        confirmation message and no further alerts.
                    </li>
                    <li>
                        <b>Help.</b> Reply <b>HELP</b> for help, or contact evanlewisdenmark [at] gmail.com.
                    </li>
                    <li>
                        <b>Carriers.</b> Carriers are not liable for delayed or undelivered messages.
                    </li>
                    <li>
                        <b>Changes.</b> We may update these terms and this policy; the effective date above
                        reflects the latest version.
                    </li>
                </ol>

                <p className={styles.fine}>
                    Contact: Evan Denmark, evanlewisdenmark [at] gmail.com.
                </p>
            </div>
        </div>
    </>
}

export default WaiWaiPrivacy;
