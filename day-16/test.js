const txt = `{
    "name":"Rakib",
    "hometown":"sirajganj",
    "address": {
        "street":"ratonkandi",
        "bazar":"nalka",
        "post": {
            "gram":"moddhokhan",
            "house":"majh"
        }
    },
    "skills":["HTML","CSS","JS"]
}`;

const obj = JSON.parse(txt, function (key, value) {
  if (key == "") {
    console.log("empty key");
  } else {
    console.log(key);
  }

  return value;
});
