import React, { useState } from 'react';
import styles from './projectsCss.module.css';

const Project = ({ title, images, content, href }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNextSlide = () => {
        setCurrentSlide((currentSlide + 1) % images.length);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((currentSlide - 1 + images.length) % images.length);
    };

    return (
        <div className={styles.projectBody}>
            <div className={styles.project}>
                <h1 className={styles.projectTitle}>{title}</h1>
                <div className={styles.projectContainer}>
                    <div className={styles.sliderContainer}>
                        <img src={images[currentSlide]} alt={title} className={styles.projectImage} />
                        <button className={styles.prev} onClick={handlePrevSlide}>&#10094;</button>
                        <button className={styles.next} onClick={handleNextSlide}>&#10095;</button>
                        <div className={styles.overlay}>
                            <a className={`${styles.btn} ${styles.btnPrimary}`} href={href}>Click Here!</a>
                        </div>
                    </div>
                    <div className={styles.projectContent}>
                        <p className={styles.projectContentText}>{content}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;
