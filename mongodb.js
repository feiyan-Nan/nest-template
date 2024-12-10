const mongoose = require('mongoose');
const conn = mongoose.connect('mongodb://localhost:27017/db');
let PersonSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, //姓名
    age: Number, //年龄
  },
  { versionKey: false },
);
conn
  .then(async (res) => {
    // console.log(res);
    // 定义一个模型
    const PersonModel = res.model('Person', PersonSchema);
    // console.log(PersonModel.find({}));
    // await PersonModel.create({ name: 'zfpx', age: 7 });
    // await PersonModel.updateMany({ name: '张三' }, { age: 21 });

    // const data = await PersonModel.find({ age: 18 });
    // console.log(data);
    // await PersonModel.deleteMany({ age: '' });
    await PersonModel.deleteOne({ name: '张三' });
    // const data = await PersonModel.find({});
    // console.log(data, 2
    // PersonModel.create({ name: '张三144', age: 18 }, {})
    //   .then((r) => console.log(r, 1))
    //   .catch((err) => console.log(err));
    // const personEntity = new PersonModel({ name: '张22三', age: 18 });
    // personEntity.save().then((res) => {
    //   console.log(res);
    // });
    // console.log('数据库连接成功', personModel.name);
  })
  .catch((err) => {
    console.log('数据库连接失败', err);
  });

// conn.model('Person', PersonSchema);
