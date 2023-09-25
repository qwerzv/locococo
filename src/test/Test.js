let characterName = "반갑소";

/* TODO
1. characterName null처리
*/

const encoded = encodeURI(characterName);

const pring = `앙 ${encoded}`;
console.log(pring);

// const response = await axios.get(
//   `https://developer-lostark.game.onstove.com/characters/{encoded}/siblings`,
//   {
//     headers: {
//       accept: "application/json",
//       authorization:
//         "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAzMjM3MzQifQ.cOxA0cajp7aTwULOwevlYQo83M33p4v6l2Q0HQDggo7PZ7LE0_njBcTWwN_8ss0aMdZ7GNmUbkV4c2c60WQECCZwKmd-c8kmUa108DYANuRVGQ81recNKUZYBLgMVbLWmUyWTWWpW5HuM4ekEk0YI1B6-OHhPEYgxOjteAGwOP2bSK2w2tuiby4KWZyCmWzvMpbVun36psuIWNXKvNkzwIz8uUEa8wOwV8Av5-iXWn_3OXhm6Qzly--DTZu4REftxL9sp4_7RwZ_7dX7NXleB-YlvV9BEqlX17w52LegDz_iRRUmd2BFwoVAOs76Y864xfh0NtruCT4yB9wfz5z2Qw",
//     },
//   }
// );
