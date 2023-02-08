const superagent = require('superagent');
const fs = require('fs');
const { resolve } = require('path');
const { rejects } = require('assert');

// CALLBACK-HELL
/*
fs.readFile(`${__dirname}/dog.txt`,"utf-8",(err, data) => {
    superagent
        .get(`https://dog.ceo/api/breed/${data.trim()}/images/random`)
        .end((err, res) => {
            if(err) return console.log(err);
            console.log(res.body.message);

            fs.writeFile("dog.img", res.body.message, err => {
                if(err) return console.log(err);
                console.log("Dog image saved to file")
            });
        });
});
*/
// THEN SYNTAX
/*
fs.readFile(`${__dirname}/dog.txt`,"utf-8",(err, data) => {
    superagent
        .get(`https://dog.ceo/api/breed/${data.trim()}/images/random`)
        .then(res => {
            console.log(res.body.message)
            fs.writeFile("dog.img", res.body.message, err => {
                if(err) return console.log(err);
                console.log("Dog image saved to file")
            });
        })
        .catch( err => console.log("Error: " + err));
});
*/

// PROMISES

const readFilePro = (file) => {
    // executor function
    return new Promise((resolve, reject) => {
        fs.readFile(file, "utf-8", (err, data) => {
            if(err) reject("File not found");
            resolve(data);
        })
    })
}

readFilePro(`${__dirname}/dog.tx`)

const writeFilePro = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, (err) => {
            if(err) reject("File not found");
            resolve("Image saved to file");
        })
    })
}
/*
readFilePro(`${__dirname}/dog.txt`).then(data =>
    superagent
        .get(`https://dog.ceo/api/breed/${data.trim()}/images/random`)
        .then(res => writeFilePro(`${__dirname}/dog.img`, res.body.message))
        .then(res => console.log(res))
        .catch(err => console.log(err))
        .finally(() => console.log("I am done!"))
);
*/
// ASYNC/AWAIT
/*
const getDogPics = async () => {
    try {
        const data = await readFilePro(`${__dirname}/dog.txt`);
        const res = await superagent.get(`https://dog.ceo/api/breed/${data.trim()}/images/random`)
        const text = await writeFilePro(`${__dirname}/dog.img`, res.body.message)
        return(text)
    } catch (e) {
        throw new Error(e.message);
    }
};
*/
// Promise all

const getDogPics = async () => {
    try {
        const data = await readFilePro(`${__dirname}/dog.txt`);
        const res1 = await superagent.get(`https://dog.ceo/api/breed/${data.trim()}/images/random`);
        const res2 = await superagent.get(`https://dog.ceo/api/breed/${data.trim()}/images/random`);
        const res3 = await superagent.get(`https://dog.ceo/api/breed/${data.trim()}/images/random`);
        const all = await Promise.all([res1, res2, res3]);
        const images = await all.map( el => el.body.message);
        console.log(images);

        const text = await writeFilePro(`${__dirname}/dog.img`, images.join("\n"));
        console.log(text);
    } catch (e) {
        throw new Error(e.message);
    }
};

getDogPics();

// IIFE Immediatly Invoked Function Expressions
/*
console.log("1: Wil get dog pics");
(async() => {
    try {
        const data = await getDogPics();
        console.log("2: " + data);
        console.log("3: Done getting dog pics");
    } catch (e) {
        throw new Error(e.message);
    }
})();
*/