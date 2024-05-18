const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const db = new sqlite3.Database('database.db');

app.use(express.json());

app.get('/api/questions', (req, res) => {
    db.all('SELECT * FROM questionsIntel', (err, rows) => {
        if (err) {
            res.status(500).json({ message: err.message });
            return;
        }
        res.json(rows);
    });
});

app.post('/api/questions', (req, res) => {
    const { question, options } = req.body;
    db.run('INSERT INTO questionsIntel (question, options) VALUES (?, ?)', [question, JSON.stringify(options)], function (err) {
        if (err) {
            res.status(400).json({ message: err.message });
            return;
        }
        res.status(201).json({ id: this.lastID });
    });
});

let userProfile = {
    name: 'Ann',
    email: 'marichka@1.com',
    gender: 'Female',
    dob: '2001-01-01'
};

app.get('/api/profile', (req, res) => {
    res.json(userProfile);
});

app.post('/api/profile', (req, res) => {
    userProfile = req.body;
    res.json({ message: 'Profile updated successfully' });
});
app.put('/api/profile', (req, res) => {
    userProfile = req.body;
    res.json(userProfile);
});


app.use(cors());

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

/*
const questionsIntel = [
    {
        question: 'How often do you experience stress or negative emotions?',
        options: [
            'Very often',
            'Occasionally',
            'Almost never'
        ]
    },
    {
        question: 'How do you react to stressful situations?',
        options: [
            'Seek support from friends or family',
            'Use relaxation techniques (e.g., deep breathing exercises or meditation)',
            'Engage in physical activity (sports, yoga, etc.)',
            'Engage in a favorite hobby or activity',
            'Other'
        ]
    },
    {
        question: 'What strategies do you use to support your emotional well-being?',
        options: [
            'Regular walks outdoors',
            'Reading books or watching movies',
            'Listening to music',
            'Practicing deep breathing or yoga',
            'Keeping a journal or writing in a notebook',
            'Other'
        ]
    },
    {
        question: 'How do you feel the impact of emotional intelligence in your daily life?',
        options: [
            'It helps me better understand myself and others',
            'It helps me manage my own emotions more effectively',
            'I feel it eases my interactions with others',
            'It helps me better solve problems and conflicts',
            'Other'
        ]
    },
    {
        question: 'What other methods do you consider effective for supporting emotional well-being?',
        options: [
            'Social support from friends and family',
            'Seeking professional psychological support',
            'Participating in group activities or clubs',
            'Engaging in a community with similar interests'
        ]
    }
];

db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS questionsIntel (id INTEGER PRIMARY KEY AUTOINCREMENT, question TEXT, options TEXT)');
    questionsIntel.forEach(({ question, options }) => {
        db.run('INSERT INTO questionsIntel (question, options) VALUES (?, ?)', [question, JSON.stringify(options)]);
    });
});
*/
