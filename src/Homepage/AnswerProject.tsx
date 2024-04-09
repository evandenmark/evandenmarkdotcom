import { useNavigate } from "react-router-dom";
import styles from './answerproject.module.css';

interface AnswerProjectProps {
    title: string,
    time: string,
    description: string,
    link?: string
}

const AnswerProject = ({ title, time, description, link }: AnswerProjectProps) => {
    const navigate = useNavigate();

    // Function to handle title click
    const handleTitleClick = () => {
        if (link) {
            // Check if the link is external
            if (/^(http|https):\/\//.test(link)) {
                // External link: Navigate using window.location.href
                window.open(link, '_blank');
            } else {
                // Internal link: Navigate using react-router-dom's navigate
                navigate(link);
            }
        }
    };

    return (
        <div className={styles.project}>
            {link ? (
                <h2 onClick={handleTitleClick} className={styles.projectTitle}>
                    {title}
                </h2>
            ) : (
                <h2 className={styles.projectTitleNoLink}>{title}</h2>
            )}
            <h4 className={styles.projectTime}>{time}</h4>
            <p className={styles.projectDescription}>{description}</p>
        </div>
    );
};

export default AnswerProject;