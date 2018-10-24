## GwendolyFaker.com
This is the source for the website at GwendolynFaker.com. Gwendolyn Faker is my wife, and this site will be used to display her work in various mediums.

---
### License
The creative works within this project are restricted. In that you cannot use them for any purpose, be it commercial or not, without the express written permission of Gwendolyn Aker.

However, the code within this project whose purpose is the functioning of a gallery site with static pages (and the creative design thereof) are open source. Distributed under the APACHE license.

---

#### Installing

    git clone https://github.com/Joe8Bit/gwendolynfaker.git
    cd gwendolynfaker
    npm install && bower install
    
#### Running

    grunt serve

Then open your browser at [http://0.0.0.0:9000/](http://0.0.0.0:9000/)

####Testing

    grunt test

####Deploying

The site is designed to be deployed to S3 and distributed via Cloudfront. In order to set this up, you need to add the following file (`config/aws.json`):

```javascript
{
	"key": "YOUR_AWS_ID",
	"secret": "YOUR_AWS_SECRET",
	"bucket": "THE_NAME_OF_THE_S3_BUCKET"
}
```
Once this is complete, you can just run the following command and it will build the project into `dist` then deploy it to the specified S3 bucket

    grunt deploy

