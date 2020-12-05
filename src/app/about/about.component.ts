import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor() {}

  public aboutMe =
    // tslint:disable-next-line: quotemark
    "Hello, I'm Akarsh, a Graduate Student at the University of Illinois - Chicago, pursuing my Masters' degree in Computer Science. My focus are in the areas of Machine Learning and Data Science. I like to explore Data and generate insights that help the organization thrive.";

  public aboutWork =
    'At Ensono, I worked as a Software Engineer Intern and developed "Agile in a Box" an Angular web application to access and visualize data from JIRA. Before coming to US, I worked at Dell Technologies as an ETL Developer in the Master Data Management Platform.';

  public currentWork =
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: quotemark
    "Currenty, I'm working on Data Analysis - Text Extraction and Summarization using Natural Language Techniques and Deep Learning models";

  public programmingLanguages =
    'C, C++, Python, R, Java, JavaScript, TypeScript';
  public webFramewWorks = 'Angular, Node.js, Express, Django, Flask';
  public database = 'Oracle SQL, MYSQL, PostgreSQL, MongoDB';
  public dataAnalytics =
    'Pandas, Numpy, Tensorflow, Keras, Scipy, Jupyter, NLTK, Scikit-Learn, Spacy';
  public dataVisualization =
    'D3.js, Three.js, Matplotlib, Seaborn, Bokeh, Tableau';
  public machineLearningModels =
    'Regression, SVM, Decision Trees, Random Forest, XGBoost, Classification, Clustering, Deep Neural Networks';

  ngOnInit(): void {}
}
