

# Personal Portfolio Site

Portfolio site to showcase some of my work and photos.

See the production deployment [here](www.carderb.com). 

See the projects Trello board [here](https://trello.com/b/mSCcGanZ/portfolio).

## Table of Contents

1. [Development](#development)
2. [Folder Structure](#folder-structure)
3. [Scripts](#scripts)
4. [Testing](#testing)

## Development

Project uses [Gatsby](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter) so if you are interested in playing around with it their documentation is a good place to start.

### Quick Start

To quickly get going all you need is to setup a local version of [node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/), clone the repo and run the following commands in the project root:

**Install dependencies:**

```javascript
npm install
```

**Start the development server:**

```javascript
gatsby develop
```

## Folder Structure

```bash
├── content  				# Content/Data for the static site
│   ├── photos              
│   	└── images			# All images in this dir get displayed on the photos page, their file names are the image alts
│   ├── projects            
│   	├── photos			# Photos referenced in projects.json
|		└── projects.json	# Data for the projects page
├── scripts					# Useful scripts (see scripts section for more detail)
├── src    					
│   ├── common              # Common files for the application that don't belong to a feature
│   ├── modules             # 'Modules' or 'features' of the application 
│   ├── pages             	# Gatsby pages
│   ├── resources           # Any general resources such as not content specific images
│   └── testing            	# Testing utilities and mocks
```

## Scripts

Most scripts come bundled from Gatsby, any scripts below are custom and aim to speed up development.

### create-module

Creates a new module under '/src/modules' based on file templates.

#### Usage

```javascript
npm run create-template NewModuleName
```

## Testing

Uses [Jest](https://jestjs.io/) and [Testing-Library](https://testing-library.com/docs/), to run:

```
npm run test
```

