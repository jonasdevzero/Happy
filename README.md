<h1 align="center">Happy</h1>
<img src="https://github.com/jonasdevzero/Happy/blob/master/web/src/images/landingPage.PNG" align="center" alt="Happy - landing page" />

## Index

* [About the Project](#about-the-project)
  * [Built with](#build-with)
* [Deploy](#deploy)
* [Getting started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Instalation](#instalation)
* [Contributing](#contributing)
* [Contact](#contact)
* [Knowledge Acquired](#knowledge-acquired)

## About the Project

Created during nlw3 .This project is an orphanage search site, aimed at visiting and making children happier. Contain 4 pages: Home, orphanagesMap, orphanages and createOrphanage.
The data is stored in a sqlite database, with upload image api and orphanages api.

### Built with

#### Languages:

web, backend and mobile - [typescript](https://www.typescriptlang.org/)

#### Frameworks: 

Web - [React](https://reactjs.org/)
mobile - [react native](https://reactnative.dev/)

#### Libraries:
web -
- [react-icons](https://react-icons.github.io/react-icons/)
- [leaflet](https://leafletjs.com/)
- [react-leaflet](https://react-leaflet.js.org/)
- [axios](https://github.com/axios/axios)
- [Mapbox](https://mapbox.com)

backend - 
- [express](https://expressjs.com/)
- [express-async-errors](https://www.npmjs.com/package/express-async-errors)
- [sqlite3](https://www.sqlite.org/index.html)
- [typeorm](https://typeorm.io/#/)
- [yup](https://github.com/jquense/yup)
- [cors](https://www.npmjs.com/package/cors)
- [multer](https://www.npmjs.com/package/multer)

mobile - 
- [expo](https://expo.io/)


## Deploy
https://happy-devzero.netlify.app/ - Use 80% zoom

## Getting started
To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm
* node

### Instalation

1. Clone this repository
```sh
$ git clone https://github.com/jonasdevzero/Happy.git
```
2. Get a key in <a href="https://mapbox.com" alt="mapbox link">Mapbox</a> and use on line 55 in
```sh
/web/src/pages/OrphanagesMap
```
3. Run the projects in the folders

3.1 web -
```sh
$ npm start 
or
$ yarn start
```
3.2 backend - 
```sh
$ npm run dev 
or
$ yarn dev
```

## Contributing
Contributions are very welcome :smile:

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

What contribute?
- Responsivity
- Optimization
- Security
- Improve code

## Contact
<a target="_blank" href="https://www.linkedin.com/in/jonas-de-oliveira-0561961ab/">
 <img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />
</a>
<a target="_blank" href="mailto:jonasdevzero@gmail.com">
 <img src="https://img.shields.io/badge/gmail-D14836?&style=for-the-badge&logo=gmail&logoColor=white" />
</a>

## Knowledge Acquired

- Map api
- A little of typescript
- typeorm
- MVC design pattern
