import mongoose from "mongoose";

const newMemberSchema = mongoose.Schema({
    Name: String,
    Major:String,
    Email: String,
    Year:String,
   
    



});

const newMember =  mongoose.model('newMember',newMemberSchema);
// newMember.find({}).then(result => {
//     result.forEach(note => {
//       console.log(note)
//     })
  
//   })
export default newMember;

