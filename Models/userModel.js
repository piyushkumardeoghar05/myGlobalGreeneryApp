const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");
const bcrypt = require('bcrypt');
// const userSchema = new Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },

//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       validate: (value) => validator.isEmail(value),
//     },
//     password: {
//       type: String,
//       required: true,
//       maxLength: 20,
//       minLength: 6,
//     },
//     confirmPassword: {
//       type: String,
//       required: true,
//       maxLength: 20,
//       minLength: 6,
//       validate: function () {
//         return this.password == this.confirmPassword;
//       },
//     },
//   },
//   { timestamps: true }
// );
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email field is required"],
      unique: [
        true,
        "Email is already linked with an account please try with different email ID",
      ],
      validate: {
        validator: (value) => validator.isEmail(value),
        message: "Provide valid email address",
      },
    },
    password: {
      type: String,
      required: true,
      maxLength: [20, "Maxlength of Password is 20 characters"],
      minLength: [6, "Minlength of Password is 6 characters"],
    },
    confirmPassword: {
      type: String,
      required: true,
      maxLength: 20,
      minLength: 6,
      validate: {
        validator: function () {
          return this.password == this.confirmPassword;
        },
        message: "Confirm Password and password should match",
      },
    },
    role: {
      type: ["user", "admin", "superadmin"],
      default: "user",
    },

    cellphone: {
      type: String,
    },
    por: {
      type: String,
    },
    imgLink: {
      type: String,
      data: Buffer,
      default:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp",
    },
    fb: {
      type: String,
      validate: {
        validator: (value) =>
          validator.isURL(value, {
            protocols: ["http", "https", "ftp"],
            require_tld: true,
            require_protocol: true,
          }),
        message: "Must be a Valid URL",
      },
    },
    insta: {
      type: String,
      validate: {
        validator: (value) =>
          validator.isURL(value, {
            protocols: ["http", "https", "ftp"],
            require_tld: true,
            require_protocol: true,
          }),
        message: "Must be a Valid URL",
      },
    },
    twitter: {
      type: String,
      validate: {
        validator: (value) =>
          validator.isURL(value, {
            protocols: ["http", "https", "ftp"],
            require_tld: true,
            require_protocol: true,
          }),
        message: "Must be a Valid URL",
      },
    },
  },
  { timestamps: true, versionKey: false }
);

// userSchema.pre('save',function () {
//     console.log('before saving in db',this);
// });
// userSchema.post('save',function () {
//     console.log('after saving in db',doc);
// });

userSchema.pre("save", function () {
  this.confirmPassword = undefined;
});

userSchema.pre('save',async function(){
 let salt = await bcrypt.genSalt();
  let hashedString =await bcrypt.hash(this.password,salt);
  // console.log(hashedString);
  this.password=hashedString;

})
module.exports = mongoose.model("User", userSchema);
