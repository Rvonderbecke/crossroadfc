require('dotenv').config();

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event, context, cb) => {
	// const { subject, text } = JSON.parse(event.body);
	const msg = {
		to: 'admin@crossroadfc.com',
		from: 'ryannv@crossroadfc.com',
		templateId: 'd-22e16811682947ff8d9eacec19a31a1b',
		subject: 'soemthing',
		text: 'yup',
		// dynamic_template_data: {
		// 	firstName: 
		// }
  };
  

  try {
  
		await sgMail.send(msg);
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
