const Doctor=require('../../../models/user_doctor');
const Patient=require('../../../models/user_patient');
const Report=require('../../../models/patient_report');


//Filter Reports Based on particular status
module.exports.filterReport = (req, res) => {
    const status = req.params.status; 
    Doctor.findOne({email:req.user.email},(err,user)=>{

        if(err)
        {
            console.log(`Error in finding doctor from request : ${err}`);
            return;
        }

        if(user==null)
            return res.status(422).json({
                'status': 'Unauthorized Request'
            });
    });
    if(status == "All"){
        Report.find({},(err,reports)=>{

            return res.status(200).json({reports});
        });
    }else{
        Report.find({status},(err,reports)=>{

            return res.status(200).json({reports});
            
        });
    }
    
}