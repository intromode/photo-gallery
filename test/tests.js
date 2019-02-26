const test = QUnit.test;

QUnit.module('title and URL test');

const image = {
    title: 'UniWhal',
    url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'
};

function htmlImageTemplate(image) {
    return `
  <li>
  <p>${image.title}</p>
  <img src="${image.url}">
</li>
  `;
}


test('dynamically display an image\'s title and URL', function(assert) {
    const expected = `
  <li>
  <p>UniWhal</p>
  <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
</li>
  `;
    const result = htmlImageTemplate(image);
    assert.equal(result, expected);
});