var nodemailer=require('nodemailer');
var transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'prakash.komati@sasi.ac.in',
        pass:'22K61A0629'
    }
})
var options={
    from:'prakash.komati@sasi.ac.in',
    to:'saisurya.kopisetti@sasi.ac.in',
    subject:'Testing Mail',
    text:'Thats easy to use'
}
transporter.sendMail(options,(err,info)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('email Sent'+info.response)
    }
}

)