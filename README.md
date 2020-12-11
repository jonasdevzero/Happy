<h1 align="center">Happy</h1>
<img src="https://github.com/jonasdevzero/MediaHub/blob/master/projects/happy/home.PNG" align="center" alt="" />

## Index

* [About the Project](#about-the-project)
  * [Built with](#built-with)
* [Preview](#preview)
* [Deploy](#deploy)
* [Getting started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Instalation](#instalation)
* [Contributing](#contributing)
  * [What Contribute](#what-contribute)
* [Contact](#contact)
* [Knowledge Acquired](#knowledge-acquired)

## About the Project

Created during nlw3 .This project is an orphanage search site, aimed at visiting and making children happier. Contain 4 pages: Home, orphanagesMap, orphanages and createOrphanage.
The data is stored in a sqlite database, with upload image api and orphanages api.

### Built with 

|                   Frontend                         |                         Backend                             |          Mobile             |
|----------------------------------------------------|-------------------------------------------------------------|-----------------------------|
|        [React](https://reactjs.org/)               |          [express](https://expressjs.com/pt-br/)            |   [expo](https://expo.io/)  |
|[styled-components](https://styled-components.com/) |[express-async-errors](https://www.npmjs.com/package/express-async-errors)|[react native](https://reactnative.dev/)        | 
|[react-icons](https://react-icons.github.io/react-icons/)|   [multer](https://www.npmjs.com/package/multer)       |                             |
|       [leaflet](https://leafletjs.com/)            |         [sqlite3](https://www.sqlite.org/index.html)        |                             |
|      [react-leaflet](https://react-leaflet.js.org/)|        [bcryptjs](https://www.npmjs.com/package/bcryptjs)   |                             |
|      [axios](https://github.com/axios/axios)       |               [cors](https://www.npmjs.com/package/co)      |                             |
|  [Mapbox](https://mapbox.com)                      |                  [nodemon](https://nodemon.io/)             |
|                                                    |                 [typeorm](https://typeorm.io/#/)            |
|                                                    |                [yup](https://github.com/jquense/yup)        |


<h2 align="center">Preview</h2>
<p align='center'>
 <img src='https://github.com/jonasdevzero/MediaHub/blob/master/projects/happy/gif.gif' atl='' />
</p>

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
Contributions are very welcome :smiley:

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

### What contribute
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
