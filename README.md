##Blog [https://blog-quote.herokuapp.com/](https://blog-quote.herokuapp.com/)
[Demo Video](https://drive.google.com/open?id=1nqOgEwg9Ss7yrBNJwB_URfSQYKoiiL5D)

This is a simple blogging application where users can write posts and create,edit ,delete comments on a post.
Post body can contain rich text (ActionText is used for this functionality).
User can  right-click on the post and  select the text or hole post,user want to quote or quote selection, it will appear in the comment section and user can type their response.
All the blog posts are displayed on the homepage with infinite scrolling.

#####Requirements

* Ruby 2.2.5
* Rails 6.0.1
* PostgreSQL

#####Setup and installation
app can be configure by following these steps:
1. Clone the repo `git clone git@github.com:sadaf-urooj/blog.git`
2. cd to into app directory
3. Run bundle
4. Run cp config/database.yml.example config/database.yml and configure the database credentials.
5. Run rails db:create 
6. Run rails db:migrate
