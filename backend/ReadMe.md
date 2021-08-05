
# npm run db:create

heroku restart && heroku pg:reset DATABASE --confirm react-solo-project && heroku run npm run sequelize db:migrate && heroku run npm run sequelize db:seed:all
