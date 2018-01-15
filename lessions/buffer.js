require("buffer");

// write to buffer
var buf = Buffer.alloc(256);
var len = buf.write("www.runoob.com");

console.log("写入字节数： " + len);

// read from buffer
buf = Buffer.alloc(26);
for ( var i = 0; i < 26; i++ ) {
    buf[i] = i + 97;
}

console.log(buf.toString("ascii"));
console.log(buf.toString("ascii", 0, 5));
console.log(buf.toString("utf8", 0, 5));
console.log(buf.toString(undefined, 0, 5));

// buffer to json
var buf = Buffer.from("www.runoob.com");
var json = buf.toJSON();

console.log(json);

// buffer merge
var buf1 = Buffer.from("菜鸟教程");
var buf2 = Buffer.from("www.runoob.com");
var result = Buffer.concat([buf1, buf2]);

if (result < 0) {
    console.log(buf1 + " 在 " + buf2 + " 之前");
} else if (result == 0) {
    console.log(buf1 + " 与 " + buf2 + " 相同");
} else {
    console.log(buf1 + " 在 " + buf2 + " 之后");
}

// buffer copy
buf1 = Buffer.from("abcdfghijkl");
buf2 = Buffer.from("RUNOOB");

// 将 buf2 插入到 buf1 的指定位置
buf2.copy(buf1, 2);

console.log(buf1.toString());

// buffer slice
buf1 = Buffer.from("runoob");
buf2 = buf1.slice(0, 2);
console.log("buffer2 content: " + buf2.toString());
console.log("buffer1 length: " + buf1.length);
console.log("buffer2 length: " + buf2.length);