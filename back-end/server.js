const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
//changed "localhost" to "127.0.0.1"
mongoose.connect('mongodb://127.0.0.1:27017/library', { //27017 is the mongodb port so when you have mongodb running you can use that port.
  //that port is where mongodb is running. You will then save the data in museum
  useNewUrlParser: true
});

// Create a scheme for items in the museum: a title and a path to an image.
const journalSchema = new mongoose.Schema({ //template for the data you're going to store
  alias: String,
  entries: Array, //will be an array of objects with both entry and date
});

const entriesSchema = new mongoose.Schema({
  content: String,
  date: String,
});

// Create a model for items in the museum.
const Journal = mongoose.model('Journal', journalSchema);

const Entries = mongoose.model('Entries', entriesSchema);

app.get('/api/journal', async (req, res) => {
  try {
    let journal = await Journal.find();
    res.send(journal);
  } catch(error) {
    res.sendStatus(500);
  }
});

app.post('/api/journal', async (req, res) => {
  let known = false;

  (await Journal.find()).forEach(async (book) => {
    if (book.alias === req.body.alias) {
      known = true;
      //Journal already exists
      const newEntry = new Entries({
        content: req.body.entrycontent,
        date: req.body.entrydate,
      })
      book.entries.push(newEntry);
      try {
        await newEntry.save();
        await book.save();
        res.send(book);
      }catch(error) {
        res.sendStatus(500);
      }
    }
  });

  if (!known) {
    const newEntry = new Entries({
      content: req.body.entrycontent,
      date: req.body.entrydate,
    });
    const journal = new Journal({
      alias: req.body.alias,
      entries: newEntry,
    });

    try {
      await journal.save();
      res.send(journal);
    } catch(error) {
      res.sendStatus(500);
    }
  }

});

app.delete('/api/journal/:id', async (req, res) => {
  try {
    await Journal.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch(error) {
    res.sendStatus(500);
  }
});

app.delete('/api/journal/:jid/:id', async (req, res) => {
  try {
    let journal = await Journal.findOne({
      _id: req.params.jid
    });
    //console.log(journal.entries);
    for (let index in journal.entries) {
      console.log("in for loop");
      //console.log("Entry ", );
      // console.log("Outside if ", entr._id);
      if (journal.entries.at(index)._id.equals(req.params.id)) {
          console.log("Inside if");
          journal.entries.splice(index, 1);
          console.log(journal.entries);
          break;
      }
    }
    journal.save();
    res.sendStatus(200);
  } catch(error) {
    console.log("500 error is ", error);
    res.sendStatus(500);
  }
});

app.put('api/journal/index', async(req, res) => {
  try {
    let journal = await Journal.findOne({
      entries: {
        _id: req.body.id,
      }
    });
    journal.entries = req.body.entries;
    await journal.save();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// async editItem(item) {
//       try {
//         await axios.put("/api/items/" + item._id, {
//           title: this.findItem.title,
//           description: this.findItem.description,
//         });
//         this.findItem = null;
//         this.getItems();
//         return true;
//       } catch (error) {
//         console.log(error);
//       }
//     },
//   }
// }

//let Journal = await Journal.find
//then loop through entries array




app.listen(3000, () => console.log('Server listening on port 3000!')); //DONT FORGET TO DELETE CONSOLE.LOG
