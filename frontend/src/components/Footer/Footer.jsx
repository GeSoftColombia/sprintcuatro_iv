export const AppFooter = () => {

  const Pie = "© 2022 Gesoftcol. All rights reserved.";

    return (
      <footer className="mt-auto py-5 bg-light text-lg-start">
        <div className="container d-flex justify-content-center">
          <span className="text-muted">{Pie}</span>
        </div>
      </footer>
    );
  }
