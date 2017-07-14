using agdregbak.Cors;
using agdregbak.Enc;
using agdregbak.Http;
using ImageResizer;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Net.Mail;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace agdregbak.Controllers
{
    public class HomeController : Controller
    {
        AGDRegEntities db = new AGDRegEntities();
        public ActionResult Index()
        {
            return Redirect("~/dist/");
        }


        private bool checkTokenValid(string cyphertext,string useraddress){
            
            var plaintext = RSAHelper.Decrypt(cyphertext);
            var tokearr = plaintext.Split(',');
            if (tokearr.Length == 2)
            {
               if (useraddress == tokearr[1].ToString())
               {
                
                   return true;
               }
            }

            return false;

        }

        [AllowCrossSite]
        public ActionResult GetToken()
        {

            var tokenvalue = DateTime.Now.Ticks.ToString() + "," + Request.UserHostAddress;

            var token = RSAHelper.Encrypt(tokenvalue);


            var result = checkTokenValid(token, Request.UserHostAddress);

            return Json(token, JsonRequestBehavior.AllowGet);
        }

        [AllowCrossSite]
        public ActionResult GetServices()
        {
            var services = db.services.ToList();
            var types = db.servicetypes.ToList();
            var servicetypes = types.Select(s => new { name = s.name, order = s.priority, service = services.Where(t => t.type_id == s.id).ToList() }).ToList();
            return Json(servicetypes, JsonRequestBehavior.AllowGet);
            
        }

      

        [AllowCrossSite]
        public ActionResult Enquiry(string refno)
        {
           var reg = db.registers.Where(s => s.refno == refno.Trim()).SingleOrDefault();
            if(reg == null){
                return Json(new { code = 400 }, JsonRequestBehavior.AllowGet);
            }

           return Json(new { code = 200, status = reg.status.Trim() , review = reg.review_date, message = reg.review_message }, JsonRequestBehavior.AllowGet);

        }

        [HttpPost]
        [AllowCrossSite]
        public async Task<ActionResult> Register(RegisterModel model)
        {
            var message = "";
            var code = 0;


            try { 
            var googlescret = "6LfHiyUUAAAAAGcmd9MIiNadDZIoD77Lewd9fKYI";
            var recaptchaurl = "https://www.google.com/recaptcha/api/siteverify?secret=" + googlescret + "&response=" + model.recaptcha;
            var recaptcharesult = HttpHelper.Client.PostAsync(recaptchaurl, null);
            var responseString = await recaptcharesult.Result.Content.ReadAsStringAsync();

            dynamic d = JObject.Parse(responseString);
            var success = d.success;

            if (!success.Value)
            {
                message += "Invalid Captcha";
                code = 400;
                return Json(new { code = code, message = message }, JsonRequestBehavior.AllowGet);
            }
            }
            catch (Exception ex)
            {

            }
          

            if (model == null)
            {
                message += ",Invalid Data";
                code = 400;
            }
            if (model.fname == null)
            {
                message += ",First Name Required"; code = 400;
            }
            if (model.lname == null)
            {
                message += ",Last Name Required"; code = 400;
            }
            if (model.fathername == null)
            {
                message += ",Father Name Required"; code = 400;
            }
            if (model.gender == null)
            {
                message += ",Gender Required"; code = 400;
            }
            if (model.nrcno == null)
            {
                message += ",NRC no Required"; code = 400;
            }

            if (model.dob == null)
            {
                message += ",Date of birth Required"; code = 400;
            }
            if (model.mobile == null)
            {
                message += ",Mobile Phone No Required"; code = 400;
            }
            else
            {
                Match result = Regex.Match(model.mobile, "[0-9]+");
                if (!result.Success)
                {
                    if (result.Value != model.mobile) { 
                    message += ",Invalid Mobile Phone No"; code = 400;
                    }
                }
            }
            


            if (model.email == null)
            {
                message += ",Email Required"; code = 400;
            }
            else
            {
                try { 
                MailAddress m = new MailAddress(model.email);
                }
                catch (Exception ex)
                {
                    message += ",Invalid Email"; code = 400;
                }
            }


            if (model.city == null)
            {
                message += ",City Required"; code = 400;
            }

            if (model.state == null)
            {
                message += ",State Required"; code = 400;
            }

            if (model.address == null)
            {
                message += ",Address Required"; code = 400;
            }

            if (model.services == null || model.services.Count() == 0)
            {
                message += ",Need to choose at least one service"; code = 400;
            }

            var uploadpath = Server.MapPath("/Upload");
            var iduploadpath = Server.MapPath("/IndentityUpload");

            if (model.photo == null || model.photo.Trim().Length == 0)
            {
                message += ",Passport photo Required"; code = 400;
            }
            else
            {
                var file = new FileInfo(uploadpath + "\\" + model.photo);
                if (!file.Exists)
                {
                    message += ",Invalid Passport photo"; code = 400;
                }
                else
                {
                    file.MoveTo(iduploadpath + "\\" + model.photo);
                }
            }

            if (model.nrc1 == null || model.nrc1.Trim().Length == 0)
            {
                message += ",NRC front image required"; code = 400;
            }
            else
            {
                var file = new FileInfo(uploadpath + "\\" + model.nrc1);
                if (!file.Exists)
                {
                    message += ",Invalid NRC photo"; code = 400;
                }
                else
                {
                    file.MoveTo(iduploadpath + "\\" + model.nrc1);
                }
            }

            if (model.nrc2 == null || model.nrc1.Trim().Length == 0)
            {
                message += ",NRC back image required"; code = 400;
            }
            else
            {
                var file = new FileInfo(uploadpath + "\\" + model.nrc2);
                if (!file.Exists)
                {
                    message += ",Invalid NRC photo"; code = 400;
                }
                else
                {
                    file.MoveTo(iduploadpath + "\\" + model.nrc2);
                }
            }


            if (model.signature == null || model.signature.Trim().Length == 0)
            {
                message += ",Signature image required"; code = 400;
            }
            else
            {
                var file = new FileInfo(uploadpath + "\\" + model.signature);
                if (!file.Exists)
                {
                    message += ",Invalid Signature photo"; code = 400;
                }
                else
                {
                    file.MoveTo(iduploadpath + "\\" + model.signature);
                }
            }


            if (code == 400)
            {
                return Json(new { code = code, message = message }, JsonRequestBehavior.AllowGet);

            }

            var dob = Convert.ToDateTime(model.dob);
            var createdate = DateTime.Now;
           

            var newreg = db.registers.Add(new register {
                fname = model.fname,
                lname = model.lname,
                dob = dob,
                email = model.email,
                mobile = model.mobile,
                city = model.city,
                state = model.state,
                address = model.address,
                postal = model.postal,
                photo =model.photo,
                nrcfront = model.nrc1,
                nrcback = model.nrc2,
                create_date = createdate,              
                status = "PEN",
                fathername = model.fathername,
                nrcno = model.nrcno,
                gender = model.gender,
                signature = model.signature
                
            });



            db.SaveChanges();

            var services = db.services.ToList();
            foreach (var service in model.services)
            {
              var reqservice =  services.Where(s => s.code.Trim() == service.Trim()).SingleOrDefault();
              if (reqservice != null)
              {
                  db.requests.Add(new request { register_id = newreg.Id, service_code = reqservice.code });
              }
            }


            var decValue = 10000000000 + newreg.Id;
            // Convert integer 182 as a hex in a string variable
            string hexValue = decValue.ToString("X");


            var refno = Reverse(hexValue);
            newreg.refno = refno;
            db.SaveChanges();


            return Json(new {code = 200, message = refno }, JsonRequestBehavior.AllowGet);
        }

        public static string Reverse(string s)
        {
            char[] charArray = s.ToCharArray();
            Array.Reverse(charArray);
            return new string(charArray);
        }

         [AllowCrossSite]
        [HttpPost]
        public ActionResult Upload()
        {
            var savename = Guid.NewGuid().ToString();
            try { 
            var uploadpath = Server.MapPath("/Upload");
           
            var file = Request.Files[0];

            //if (file.ContentLength > 1000 * 1000 * 5) {
            //    return Json(new { code = 200, message = "File size must be less than 5MB" }, JsonRequestBehavior.AllowGet);
            //}
            file.InputStream.Seek(0, SeekOrigin.Begin);


            
            //Let the image builder add the correct extension based on the output file type
            ImageBuilder.Current.Build(
                new ImageJob(
                    file.InputStream,
                    uploadpath + "\\" + savename,
                    new Instructions("maxwidth=800&maxheight=800&format=jpg"),
                    false,
                    true));
                }

               
            catch (Exception ex)
            {
                return Json(new { code = 500, message = "Saving fail, Please try again later." }, JsonRequestBehavior.AllowGet);
            }


            // file.SaveAs(uploadpath + "\\" + savename);
            return Json(new { code = 200, message = savename + ".jpg" }, JsonRequestBehavior.AllowGet);
          
          
        }
         [AllowCrossSite]
         public ActionResult SaveSignature(string image)
         {
             var savename = Guid.NewGuid().ToString();
             try { 
             var bytes = Convert.FromBase64String(image.Split(',')[1]);
             var uploadpath = Server.MapPath("/Upload");
            



             using (var imageFile = new FileStream(uploadpath + "\\" + savename + ".png", FileMode.Create))
             {
                 imageFile.Write(bytes, 0, bytes.Length);
                 imageFile.Flush();
             }
             }


             catch (Exception ex)
             {
                 return Json(new { code = 500, message = "Saving fail, Please try again later." }, JsonRequestBehavior.AllowGet);
             }
             return Json(new { code = 200, message =  savename + ".png" }, JsonRequestBehavior.AllowGet);
         }

         [AllowCrossSite]
         [HttpPost]
         public ActionResult Review(Review  review)
         {

             var r = db.registers.Where(s => s.Id == review.id).SingleOrDefault();

             if (r == null)
             {
                 return Json(new { code = 400 }, JsonRequestBehavior.AllowGet);
             }

             r.review_message = review.remark;
             r.status = review.status;
             r.review_date = DateTime.Now;

             db.SaveChanges();
             return Json(new { code = 200 }, JsonRequestBehavior.AllowGet);
         }


         [AllowCrossSite]
         public ActionResult GetDeatilData(int id)
         {

            
             var r = db.registers.Where(s => s.Id == id).SingleOrDefault();

             if (r == null)
             {
                 return Json(new { code = 400 }, JsonRequestBehavior.AllowGet);
             }

                 var newregister = new RegisterModel();
                 newregister.fname = r.fname;
                 newregister.lname = r.lname;
                 if (r.dob != null)
                 {
                     newregister.dob = r.dob.Value.ToString("dd-MM-yyyy");
                 }
                 newregister.city = r.city;
                 newregister.state = r.state;
                 newregister.postal = r.postal;
                 newregister.address = r.address;
                 newregister.email = r.email;
                 newregister.mobile = r.mobile;
                 newregister.id = r.Id;
                 newregister.nrc1 = r.nrcfront;
                 newregister.nrc2 = r.nrcback;
                 newregister.photo = r.photo;
                 newregister.status = r.status;
                 newregister.signature = r.signature;
                 newregister.fathername = r.fathername;
                 newregister.gender = r.gender;
                 newregister.refno = r.refno;


                 if (r.review_date != null)
                 {
                     newregister.reviewdate = r.review_date.Value.ToString("dd-MM-yyyy");
                 }
                 newregister.remark = r.review_message;
                 newregister.services = db.requests.Where(rs => rs.register_id == r.Id)
                     .Join(db.services,
                     t => t.service_code, sr => sr.code,
                     (t, sr) => sr.name).ToList<string>();






                 return Json(new { code = 200, data = newregister }, JsonRequestBehavior.AllowGet);

         }

         [AllowCrossSite]
         public ActionResult GetData(Filter filter)
         {

             List<RegisterModel> regs = new List<RegisterModel>();
             var reg = db.registers.Where(s => s.create_date > filter.start && s.create_date < filter.end && ( filter.refno == null || s.refno.Contains(filter.refno) )).ToList();
             foreach (var r in reg)
             {
                 var newregister = new RegisterModel();
                 newregister.fname = r.fname;
                 newregister.lname = r.lname;
                 if (r.dob != null)
                 {
                     newregister.dob = r.dob.Value.ToString("dd-MM-yyyy");
                 }
                 newregister.city = r.city;
                 newregister.state = r.state;
                 newregister.postal = r.postal;
                 newregister.address = r.address;
                 newregister.email = r.email;
                 newregister.mobile = r.mobile;
                 newregister.id = r.Id;
                 newregister.nrc1 = r.nrcfront;
                 newregister.nrc2 = r.nrcback;
                 newregister.photo = r.photo;
                 newregister.status = r.status;
                 newregister.signature = r.signature;
                 newregister.fathername = r.fathername;
                 newregister.gender = r.gender;
                 
                // newregister.services = db.requests.Where(s => s.register_id == r.Id).Select(s => s.service_code).ToList();
                 regs.Add(newregister);

             }


             if (reg == null)
             {
                 return Json(new { code = 400 }, JsonRequestBehavior.AllowGet);
             }

             return Json(new { code = 200, data = regs}, JsonRequestBehavior.AllowGet);

         }

    }
    public class Review
    {
        public int id { get; set; }
        public string status { get; set; }
        public string remark { get; set; }
    }

    public class RecaptchaResult
    {
        public bool success { get; set; }
        public string challenge_ts { get; set; }
        public string hostname { get; set; }
    }
    public class Filter
    {
        public DateTime start { get; set; }
        public DateTime end { get; set; }
        public string refno { get; set; }
    }

    public class RegisterModel
    {
        
    public int id{get;set;}
    public string fname{get;set;}
	public string lname{get;set;}
	public string dob{get;set;}
	public string mobile{get;set;}
	public string email{get;set;}
	public string city{get;set;}
    public string state{get;set;}
	public string address{get;set;}
    public string postal{get;set;}
    public string recaptcha { get; set; }
	public string photo{get;set;}
	public string nrc1{get;set;}
    public string nrc2 { get; set; }
    public string status { get; set; }
    public string reviewdate { get; set; }
    public string remark { get; set; }
    public string refno { get; set; }
    public List<string> services { get; set; }


    public string gender{get;set;}
	public string fathername{get;set;}
	public string nrcno{get;set;}
	public string salutation{get;set;}
    public string signature { get; set; }
    }
}