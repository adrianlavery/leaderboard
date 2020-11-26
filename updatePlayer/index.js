module.exports = async function (context, req) {
    context.log('updatePlayer triggered.');

    if (req.body && req.body.username && req.body.game && req.body.score) {
        return {
        playerDocument: {
            id: req.body.username,
            game: req.body.game,
            score: req.body.score,
          },
          res: {
            status: 204,
          },
        };
      }
    
      return {
        res: {
          status: 400,
          body:
            "Please pass a a request body containing a username, a game and a score." & req,
        },
      };
}