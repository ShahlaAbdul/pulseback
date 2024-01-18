import express from 'express'
import cors from "cors"
import mongoose, { Schema } from 'mongoose'
const app = express()
const port = 3100

app.use(cors())
app.use(express.json())

const testpulseSchema = new Schema({
  name: String, 
  description: String,
  price: Number,
  
});
const PulseModel = mongoose.model('Test', testpulseSchema);

app.get('/', async  (req, res) => {
    try {
        const testpulse= await PulseModel.find({})
        res.send(testpulse)
    } catch (error) {
        res.send(error.message)
    }
  })
app.get('/:id', async  (req, res) => {
    try {
        const {id}= req.params
        const testpulse= await PulseModel.findById(id)
        res.send(testpulse)
    } catch (error) {
        res.send(error.message)
    }
  })
  
  app.post('/', async  (req, res) => {
    try {
        const {name,description,price}= req.body
        const newPulse= new PulseModel({name,description,price})
        await newPulse.save()
        res.send("eyfduwse9o")
    } catch (error) {
        res.send(error.message)
    }
  })
  
  app.put('/:id', async  (req, res) => {
    try {
        const {id}=req.params
        const {name,description,price}= req.body
        const newPulse= await  PulseModel.findByIdAndUpdate(id,{name,description,price})
        res.send(newPulse)
    } catch (error) {
        res.send(error.message)
    }
  })
  
  app.delete('/:id', async  (req, res) => {
    try {
        const {id}=req.params
        const newPulse= await  PulseModel.findOneAndDelete(id)
        res.send(newPulse)
    } catch (error) {
        res.send(error.message)
    }
  })
  mongoose
  .connect('mongodb+srv://Shahla:sehla200415@mycluster.vpdzf3b.mongodb.net/')
   .then(()=>console.log("connected"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


















// 


  

//
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })