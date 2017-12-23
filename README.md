# Jarvis-serverless

Introduction

This is a Serverless structure application which build on AWS.
* All Serverless code are in src/code folder, it's using SAM 
(Serverless Application Model- a transformed AWS Cloudformation). 
* src/resource folder saves all dependent resource which uses pure AWS Cloudformation

(Why use two Cloudformation template? That's because SAM does not support all AWS resources)


Command:

* To package Serverless application, go to root level and use:
```sybase
sam package --template-file src/code/template.yaml --s3-bucket serverless.repo --output-template-file src/code/serverless-output.yaml
```
* To deploy Serverless application to cloud
```sybase
sam deploy --template-file src/code/serverless-output.yaml --stack-name serverlessStack --capabilities CAPABILITY_IAM
```

* To deploy other AWS resources
```sybase
aws cloudformation deploy --template-file src/resource/cloudformation-template.yaml --stack-name resourceStack --capabilities CAPABILITY_IAM
```