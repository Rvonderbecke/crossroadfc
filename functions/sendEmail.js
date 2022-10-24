require('dotenv').config();

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event, context, cb) => {
	const { name, email} = JSON.parse(event.body);
	const msg = {
		to: 'admin@crossroadfc.com',
		from: 'ryannv@crossroadfc.com',
		templateId: 'd-89f41f46ebf545eab27b349aa7caf6fd',
		dynamicTemplateData: {
			name: name,
			email: email,
		  },
  };
  

  try {
  
	  const res = await sgMail.send(msg);
	  console.log(res)
		return {
			headers: {
				'Access-Control-Allow-Origin': '*',
			},
			statusCode: 200,
			body: 'Message Sent',
		};
	} catch (err) {
		return {
			headers: {
				'Access-Control-Allow-Origin': '*',
			},
			statusCode: 200,
			body: err,
		};
	}
};
