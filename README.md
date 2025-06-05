# LeadX



## Welcome

Christian Training

## Description

Christian Training

## Built With
<div width="200px" align="center">
<span align="center">
  <a href="https://nextjs.org/" target="blank"><img src="https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png" width="50" alt="Next Logo" /></a>
</span>
<span align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="50" alt="Nest Logo" /></a>
</span>
<span align="center">
  <a href="https://www.prisma.io/" target="blank"><img src="https://w7.pngwing.com/pngs/130/82/png-transparent-prisma-hd-logo.png" width="50" alt="Prisma Logo" /></a>
</span>

</div>
[ _Insert Core platform logos here with links to their maintainer/vendor sites. First one is given above_ ]

## Installation

Setup .env files for Server, MatchX and Web

### Server
```bash
# [ Insert commands here]
$ cd <project_dir>
$ docker compose -f docker-compose.yml up -d
$ cd server
$ yarn
$ yarn prisma generate
$ yarn prisma deploy
$ yarn run-script ./src/scripts/upsert-roles/main.ts
$ yarn run-script ./src/scripts/upsert-tag-and-status/main.ts
$ yarn build
```

### Match-X
```bash
# [ Insert commands here]
$ cd <project_dir>
$ cd matchx
$ yarn
$ yarn prisma generate
$ yarn prisma deploy
```
Copy contents of roles, status, and tag tables from server db instance into matchx db instance.
```bash
$ yarn build
```

### Frontend
```bash
# [ Insert commands here]
$ cd <project_dir>
$ cd web
$ yarn
```

## Running the app

### Server
```bash
# [ Insert commands here]
$ cd <project_dir>/server
$ node dist/src/main.js
```

### MatchX
```bash
# [ Insert commands here]
$ cd <project_dir>/matchx
$ yarn start:prod
```

### Frontend
```bash
# [ Insert commands here]
$ cd <project_dir>/web
$ yarn start -p <port>
```
## Test

```bash
# [ Insert commands here]
$ sample-command
```

## Branch Information
  - Production – contains all fully QA-ed, stable, deploy-ready code.
  - Staging – contains all integration tested code. Code on this branch is ready for system [and UA] testing.
  - Release – contains summary of all target deliverable branches for the upcoming release.
  - Development - contains unit tested code. Code in this branch is ready to be integration tested by QA.
  - <_Feature/Bug_> – contains WIP code. Feature code that is still being developed or buggy code that is still being fixed.

## Feature/Bug Branch Naming Convention
  _category_**-**_ticket_code_&_name_
  
    - category: 
      - feat – for new feature development
      - bug – for bug fix development
      - patch – for temporary/emergency bug fixes
      - exp – for exploring experimental features/fixes

  - e.g. 
    `feat-cb0-1-codebase-for-backend`


## License
© All Rights Reserved 2024.

No part of this software may be reproduced, distributed, decompiled, and/or modified without expressed written consent from its owner.

ReadMe v.1.0

