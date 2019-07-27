import 'dotenv/config';
import app from './core/app';

const PORT = process.env.PORT || 3000;

(function startApp() {
  try {
    app.listen(PORT, () => console.log('App running at http://localhost:3000'));
  } catch (error) {
    console.error(`Error Occured ${error}`);
  }
}());
