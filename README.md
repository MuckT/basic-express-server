# basic-express-server

CodeFellows 401 JavaScript Lab 02 & AWS: Cloud Servers

This is a practice server deployment using [Heroku](https://www.heroku.com/), [Amazon EC2](https://aws.amazon.com/pm/ec2/), [Amazon Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/) and [AWS Code Pipeline](https://aws.amazon.com/codepipeline/). Deployed resources are automatically updated when the branches their respective branches are updated in Github.

[Heroku Development Server](https://muckt-basic-express-server-dev.herokuapp.com/)

[Heroku Production Server](https://muckt-basic-express-server-pro.herokuapp.com/)

[AWS Production Server](http://basicexpressapi-env.eba-mr3na3sj.us-east-2.elasticbeanstalk.com/)
### Getting Started

```Bash
# Install Dependencies
npm install

# Building the Express Server - default port is 3001
npm start

# Testing the server with jest
npm test
```

Credit to [@antoni909](https://github.com/antoni909) for helping with the `logger.test.js` & `validator.test.js`