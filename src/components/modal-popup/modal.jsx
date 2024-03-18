export default function Modal({ id, header, body, footer, onClose }) {
  return (
    <div id={id || "modal"} className="modal">
      <div className="modal-content">
        <div className="header">
          <span onClick={onClose} className="close-modal-icon">
            &times;
          </span>
          <h2>{header ? header : "header"}</h2>
        </div>

        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              <p>This is the body</p>
            </div>
          )}
        </div>

        <div className="footer">
          {footer ? (
            footer
          ) : (
            <div>
              <h2>footer</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
