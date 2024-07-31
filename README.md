

# Personal Portfolio Site

Portfolio site to showcase some of my work and photos.

See the production deployment [here](https://www.brcarder.com). 

See the projects Trello board [here](https://trello.com/b/mSCcGanZ/portfolio).

## Development

Project uses [NextJS](https://nextjs.org/docs) so if you are interested in playing around with it their documentation is a good place to start.

### Quick Start

To quickly get going all you need is to setup a local version of [node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/), clone the repo and run the following commands in the project root:

**Install dependencies:**

```javascript
npm install
```

**Start the development server:**

```javascript
npm run dev
```

## Folder Structure

```bash
├── public                  # Public content
│   ├── photos              
│       └── images          # All images in this dir get displayed on the photos page, their file names are the image alts
│   ├── projects            
│       ├── images          # Photos referenced in projects.json
|       └── projects.json   # Data for the projects page
├── scripts                 # Useful scripts (see scripts section for more detail)
├── src
|   ├── api                 # Data retrieval                  
│   ├── common              # Common files for the application that don't belong to a feature
│   ├── modules             # 'Modules' or 'features' of the application 
│   ├── app                 # Nextjs primary directory
│   ├── resources           # Any general resources such as non content specific images
│   └── testing             # Testing utilities and mocks
```

## Scripts

Most scripts come bundled from Nextjs, any scripts below are custom and aim to speed up development.

### create-module

Creates a new module under '/src/modules' based on file templates.

#### Usage

```javascript
npm run create-module NewModuleName
```

### optimize-gallery

Creates size reduced versions of gallery images, used for thumbnails

#### Usage

```javascript
npm run optimize-gallery
```

## Testing

Uses [Jest](https://jestjs.io/) and [Testing-Library](https://testing-library.com/docs/), to run:

```
npm run test
```
