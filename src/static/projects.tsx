export type Project = {
  "img_path": string,
  "description_general": string,
  "title": string, 
  "description_specific": string,
  "tools_1": string,
  "tools_2": string,
  "links":  { [key: string]: string }
};

export const Projects: Array<Project> = [
  {
    img_path: './images/marquez_screenshot.png',
    description_general: 'Landing Page - OSS Contribution',
    title: 'Marquez Header & Messaging Upgrades',
    description_specific: 'Webpage redesign and project marketing improvements',
    tools_1: 'React, Typescript',
    tools_2: 'MaterialUI, Docusaurus',
    links: {'github': 'https://github.com/MarquezProject/marquez/tree/main/docs/v2', 'website': 'https://marquezproject.ai'}
  },
  {
    img_path: './images/OL_ecosystem.png',
    description_general: 'Landing Page - OSS Contribution',
    title: 'OpenLineage Ecosystem Page',
    description_specific: 'Responsive webpage for displaying integrations',
    tools_1: 'React, Typescript',
    tools_2: 'MaterialUI, Docusaurus',
    links: {'github': 'https://github.com/OpenLineage/docs/blob/main/src/pages/ecosystem.tsx', 'website': 'https://openlineage.io/ecosystem'}
  },
  {
    img_path: './images/openlineage_quickstart.png',
    description_general: 'Quickstart - OSS Contribution',
    title: 'Upgraded User Guide for OpenLineage',
    description_specific: 'Guide for getting started with OpenLineage+Marquez',
    tools_1: 'Docker, OpenLineage, Marquez, Astro',
    tools_2: 'Markdown, Docusaurus',
    links: {'github': 'https://github.com/OpenLineage/docs/blob/main/docs/guides/airflow-quickstart.md', 'website': 'https://openlineage.io/docs/guides/airflow-quickstart'}
  },
  {
    img_path: './images/slack_archive.png',
    description_general: 'Community Management Tool - OSS Contribution',
    title: 'Website for Browsing Slack Archive',
    description_specific: 'Slack history site created using OSS tools',
    tools_1: 'slack-export-viewer, GitHub',
    tools_2: 'Slack',
    links: {'github': 'https://github.com/OpenLineage/slack-archives', 'website': 'https://openlineage.github.io/slack-archives/'}
  },
  {
    img_path: './images/ol_survey_form.png',
    description_general: 'User Survey - OSS Contribution',
    title: 'OpenLineage Ecosystem Survey 2023',
    description_specific: 'Annual community survey',
    tools_1: 'Google forms',
    tools_2: 'Slack',
    links: {'blog': 'https://openlineage.io/blog/ecosystem-survey', 'survey': 'https://docs.google.com/forms/d/e/1FAIpQLSd967NQ6avQcbkXGVy5I5X549yzDJUXsjeOvt9u1ENepkWwXg/viewform?pli=1'}
  },
  {
    img_path: './images/ol_survey_page.png',
    description_general: 'Landing Page - OSS Contribution',
    title: 'OpenLineage Ecosystem Survey Results Page',
    description_specific: 'Static webpage for displaying infographic',
    tools_1: 'Typescript, Docusaurus',
    tools_2: 'CSS',
    links: {'github': 'https://github.com/OpenLineage/docs/blob/main/src/pages/survey/index.tsx', 'website': 'https://openlineage.io/survey'}
  },
  {
    img_path: './images/survey_crop.png',
    description_general: 'Landing Page - OSS Contribution',
    title: 'Airflow Survey Results Page',
    description_specific: 'Static webpage for displaying infographic',
    tools_1: 'Javascript, Hugo',
    tools_2: 'CSS',
    links: {'github': 'https://github.com/apache/airflow-site/blob/main/landing-pages/site/content/en/survey/_index.html', 'website': 'https://airflow.apache.org/survey'}
  },
  {
    img_path: './images/airflow_community_crop.png',
    description_general: 'Landing Page - OSS Contribution',
    title: 'Improved Airflow Community Page',
    description_specific: 'Redesign of static webpage employing CSS grid ',
    tools_1: 'Javascript, Hugo',
    tools_2: 'CSS',
    links: {'github': 'https://github.com/apache/airflow-site/blob/main/landing-pages/site/content/en/community/_index.html', 'website': 'https://airflow.apache.org/community'}
  },
  {
    img_path: './images/changes_screenshot.png',
    description_general: 'Dev Tool - OSS Contribution',
    title: 'Get Changes',
    description_specific: 'Script for adding changes to a changelog',
    tools_1: 'Python, GitHub API',
    tools_2: 'Click, Typing',
    links: {'github': 'https://github.com/OpenLineage/OpenLineage/blob/main/dev/get_changes.py'}
  },
  {
    img_path: './images/contributors_screenshot.png',
    description_general: 'Community Management Tool - OSS Contribution',
    title: 'Get Contributor Stats',
    description_specific: 'Script for getting & exporting contributor stats',
    tools_1: 'Python, GitHub API',
    tools_2: 'Pendulum, CSV',
    links: {'github': 'https://github.com/OpenLineage/OpenLineage/blob/main/dev/get_contributor_stats.py'}
  },
  {
    img_path: './images/flights_screenshot.png',
    description_general: 'Console Application - Individual Project',
    title: 'Get Local Flights',
    description_specific: 'Script for streaming IFOs with the OpenSky API',
    tools_1: 'Python, Requests, Click, Datetime',
    tools_2: 'OpenSky API, country-bounding-boxes',
    links: {'github': 'https://github.com/merobi-hub/get-local-flights'}
  },
  {
    img_path: '/images/library_scrnshot.png',
    description_general: 'Flask Web Application - Individual Project',
    title: 'Lantern Free Library Online',
    description_specific: 'Catalog with data from Google Books API, Blog',
    tools_1: 'Python, Flask, Bootstrap, Gunicorn, Postgres',
    tools_2: 'SQLAlchemy, Werkzeug, Google Books API, Great Expectations',
    links: {'github': 'https://github.com/merobi-hub/lantern-library-online', 'website': 'https://lantern-library-online.herokuapp.com'}
  },
  {
    img_path: '/images/portfolio.png',
    description_general: 'React Web Application - Individual Project',
    title: 'Web Developer Portfolio',
    description_specific: 'Personal portfolio website with form',
    tools_1: 'TypeScript, React, Bootstrap',
    tools_2: 'MaterialUI, Emailjs, Firebase',
    links: {'github': 'https://github.com/merobi-hub/portfolio'}
  },
  {
    img_path: '/images/add_copyright.png',
    description_general: 'Dev Tool - Individual Project',
    title: 'Add Copyright Tool',
    description_specific: 'Script for adding a copyright to a project',
    tools_1: 'Python, OS, Sys',
    tools_2: 'Bash, Markdown',
    links: {'github': 'https://github.com/merobi-hub/add-copyright'}
  },
  {
    img_path: '/images/license_updater.png',
    description_general: 'Dev Tool - Individual Project',
    title: 'License Updater Tool',
    description_specific: "Script for updating an open-source project's license",
    tools_1: 'Python, OS',
    tools_2: 'Bash, Markdown',
    links: {'github': 'https://github.com/merobi-hub/license-updater'}
  },
  {
    img_path: '/images/car_api.png',
    description_general: 'React Web Application - Individual Project',
    title: 'Car Inventory',
    description_specific: 'User-generated API for collectors',
    tools_1: 'TypeScript, MaterialUI',
    tools_2: 'Firebase, Insomnia, React',
    links: {'github': 'https://github.com/merobi-hub/operators61-week8-car-inventory-react', 'heroku': 'https://car-inventory-mr.web.app/'}
  },
  {
    img_path: '/images/attendance_home.png',
    description_general: 'Flask Web Application - Individual Project',
    title: 'Attendance Keeper',
    description_specific: 'Lightweight attendance tracker with Google login',
    tools_1: 'OAuthLib, Python, Flask, SQLAlchemy, Psycopg2, Datetime',
    tools_2: 'Jinja, Bootstrap, WTF, Werkzeug, Login, Flash, Heroku',
    links: {'github': 'https://github.com/merobi-hub/attendance_tracker', 'heroku': 'https://attendance-keeper.herokuapp.com/'}
  },
  {
    img_path: '/images/weather_app_screenshot.png',
    description_general: 'React Web Application - Individual Project',
    title: "Today's Weather",
    description_specific: 'Searchable weather app',
    tools_1: 'JavaScript, Axios, React',
    tools_2: 'Regex, Firebase, OpenWeatherMap API',
    links: {'github': 'https://github.com/merobi-hub/operators-week7-weather-api', 'firebase': 'https://weather-df750.web.app/'}
  },
  {
    img_path: '/images/racer.png',
    description_general: 'React Web Application - Individual Project',
    title: 'F1 Driver Data',
    description_specific: 'Searchable sports data app',
    tools_1: 'JavaScript, Axios, React, Regex',
    tools_2: 'Firebase, Ergast Developer API',
    links: {'github': 'https://github.com/merobi-hub/operators-week7-day3-hw', 'firebase': 'https://racer-data-b0f20.web.app/'}
  },
]
