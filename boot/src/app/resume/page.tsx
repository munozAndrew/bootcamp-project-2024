import React from "react";
import "../styles/globals.css"; // Make sure this path matches your structure


export default function resume() {
    return (
    <main>
        <h1 className="resume-title">Resume</h1>
        <a href="sssssss.pdf" download="" className="down">Download Resume</a>

        <div className="resume">
          <section className="section">
            <h2 className="section-title">Education</h2>
            <div className="entry">
              <h3 className="entry-title">Bachelors of Science in Computer Science</h3>
              <p className="entry-info">California San Luis Obispo</p>
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">CourseWork</h2>
            <ul className="course-list">
              <li>Data Structures and Algorithms</li>
              <li>Course</li>
              <li>Course</li>
              <li>Course</li>
            </ul>
          </section>

          <section className="section">
            <h2 className="section-title">Skills</h2>
            <ul className="skill-list">
              <li>CSS</li>
              <li>HTML</li>
              <li>JS</li>
              <li>SQL</li>
              <li>PYTHON</li>
            </ul>
          </section>

          <section className="section">
            <h2 className="section-title">Projects</h2>
            <div className="entry">
              <h3 className="entry-title">Sudoku Solver</h3>
              <p className="entry-info">Created a solver that used backtracking to solve all sudokus</p>
              <p className="entry-experience">Used python and Github to work on multiple test cases for sudoku</p>
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Experience</h2>
            <div className="entry">
              <h3 className="entry-title">Hack4Impact Creator/CEO/ETC</h3>
              <p className="entry-info">Single handedly created hack4Impact (not satire)</p>
              <p className="entry-description">chilling</p>
            </div>
          </section>
        </div>
      </main>
      
    );
  }