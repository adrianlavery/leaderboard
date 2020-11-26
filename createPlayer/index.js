module.exports = async function (context, req) {
    context.log('CreatePlayer triggered.');

    if (req.body && req.body.username && req.body.game) {
        return {
          playerDocument: {
            id: req.body.username,
            game: req.body.game,
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
            "Please pass a a request body containing a username and a game." & req,
        },
      };
}