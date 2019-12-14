/**
 * PFAController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    list:function(req, res){
        PFA.find({}).exec(function(err, data){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.view('admin/read_data', {data:data});
            // console.log('It Worked');
        });
    },

    create:function(req, res){
        let student_name = req.body.StuName;
        let department = req.body.department;
        let roll = req.body.roll_no;
        let phone = req.body.phone;
        let body = req.body.body;

        PFA.create({Student_name:student_name, Department:department, roll_no:roll, phone_number:phone , body:body}).exec(function(err){
            if(err){
                res.send(500, {err: 'Database Error'});
            }

            res.redirect('/');
            // alert("Submitted Sucessfully");
        });

    },

    delete:function(req, res){
        PFA.destroy({id:req.params.id}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database error'});
            }
            res.redirect('/read_data');
        });
    }


};

