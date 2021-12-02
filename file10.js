var  nodemailer  = require('nodemailer');
const transport = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    requireTLS:true,
    auth:{
        user:'khanebrahim643@gmail.com',
        pass:'8432878694'
    }
});
var mailOptions={
    from:'ebrahimkhan963@gmail.com',
    to:'ebrahimkhan963@gmail.com',
    subject:'test node mail',
    text:'hello form node'
}
transport.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error)
    }else{
        console.log('email sent successfully', info.response);
    }
});