import { of, Observable,  concat } from 'rxjs';
import { take, filter, first } from 'rxjs/operators';

function isSettingValid(setting): boolean {
  return setting !== 'error' ? true : false;
}

function getSetting(): Observable<any> {

  const optionOne$ = of('error')
    .pipe(
      take(1),
      filter(setting => isSettingValid(setting))
    );

  const optionTwo$ = of('second')
    .pipe(
      take(1),
      filter(setting => isSettingValid(setting))
    );

  const optionThree$ = of('default').pipe(
    take(1),
    filter(setting => isSettingValid(setting))
  );

  return concat(optionOne$, optionTwo$, optionThree$)
    .pipe(
      first() // emits only the first value which passes validation then completes
    );
}

getSetting()
  .subscribe((setting) => {
    // Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
    <h1>
        Value from subscription: <code>${setting}</code>
    </h1>`;
    console.log(setting);
  })