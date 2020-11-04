import * as request from 'supertest';
describe('PartyController (e2e)', () => {
  const url = 'http://localhost:3000';
  let partyId = '';

  it('/ (POST) party', () => {
    return request(url)
      .post('/party')
      .send({
        name: 'asd',
        startAt: new Date(),
        endAt: new Date(),
        longitude: 123,
        latitude: 123,
        description: 'dsp',
      })
      .expect(201);
  });

  it('/ (GET) all parties', () => {
    return request(url)
      .get('/party')
      .expect(200)
      .then(res => {
        partyId = res.body.id;
      });
  });

  it('/ (GET) single party', () => {
    return request(url)
      .get('/party/' + partyId)
      .expect(200);
  });

  it('/ (DELETE) single party', () => {
    return request(url)
      .delete('/party/' + partyId)
      .expect(200);
  });
});
