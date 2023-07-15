// console.log("hi from files");

const fs = require("fs/promises");

const path = require("path");

// console.log(__dirname);

// console.log(path.join());

// console.log(path.resolve());

const usersPath = path.join(__dirname, "..", "db", "users.json");

class FileOperations {
  constructor(path) {
    this.path = path;
  }

  async create(data) {
    return await fs.writeFile(this.path, JSON.stringify(data, null, 2));
  }

  async read() {
    return await fs.readFile(this.path, "utf-8");
  }

  async display() {
    const users = JSON.parse(await this.read());

    console.log(users);

    return true;
  }

  async update(newUser) {
    const users = JSON.parse(await this.read());
    users.push(newUser);
    // console.log(typeof users);
    return await this.create(users);
  }

  async remove() {
    return await fs.unlink(this.path);
  }

  async updateOne(data) {
    const users = JSON.parse(await this.read());
    const updatedUsers = users.map((item) => {
      if (item.id === data.id) {
        item.name = data.name;
        return item;
      }
      return item;
    });
    // return await this.create(updatedUsers);
  }

  async removeOne(id) {
    const users = JSON.parse(await this.read());
    const index = users.findIndex((item) => item.id === id);

    if (index === -1) return null;

    users.splice(index, 1);

    return await this.create(users);
  }
}

const file = new FileOperations(usersPath);

const users = [
  { id: "1", name: "yura" },
  { id: "2", name: "dasha" },
  { id: "3", name: "alex" },
];

// file.create(users);

// file.display();

// file.update({ id: "4", name: "andrii" });

// file.remove();

// file.updateOne({ id: "2", name: "dasha tkachenko" });

// file.removeOne("2");

module.exports = file;
