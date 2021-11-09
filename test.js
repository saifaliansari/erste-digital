const wordUtils = require('./WordUtils.js');

              
test ('Testing stop words',function(){
   expect(wordUtils.countWords('Mary had a little lamb',new Set(['a']))).toEqual(4);
});

test ('Testing empty',function(){
    expect(wordUtils.countWords(' ',new Set(['a']))).toEqual(0);
 });

 test ('Testing without stop words',function(){
    expect(wordUtils.countWords('Mary had',new Set())).toEqual(2);
 });

 test ('Testing special chars',function(){
    expect(wordUtils.countWords('Mary$had',new Set())).toEqual(2);
 });

 test ('Testing special chars only',function(){
    expect(wordUtils.countWords('$',new Set())).toEqual(0);
 });

 