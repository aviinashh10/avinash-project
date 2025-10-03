body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #2d085a 70%, #51267a 100%);
  font-family: 'Montserrat', Arial, sans-serif;
}
.container {
  background: #341a58;
  border-radius: 18px;
  box-shadow: 0 6px 32px rgba(65,47,110,0.15);
  padding: 42px 38px;
  min-width: 340px;
  text-align: center;
}
h1 {
  color: #fff;
  margin-bottom: 18px;
  font-size: 2.1rem;
  letter-spacing: 1px;
}
.display {
  background: #491d83;
  color: #fff;
  font-size: 2.6rem;
  font-weight: bold;
  border-radius: 10px;
  margin: 0 auto 28px;
  padding: 18px 0;
  letter-spacing: 2px;
}
.button-row {
  display: flex;
  justify-content: center;
  gap: 14px;
  margin-bottom: 18px;
}
button {
  border: none;
  background: linear-gradient(135deg, #7d46ff 70%, #371c50 100%);
  color: #fff;
  font-size: 1.1rem;
  font-family: inherit;
  font-weight: 600;
  padding: 12px 36px;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 2px 10px #311d4c50;
  transition: background 0.25s, transform 0.18s;
}
button:hover {
  background: #9881d6;
  color: #2d085a;
  transform: translateY(-2px) scale(1.05);
}
.laps {
  margin-top: 10px;
  color: #e4e1f0;
  text-align: left;
  max-height: 120px;
  overflow-y: auto;
  font-size: 1rem;
}
@media (max-width: 420px) {
  .container { min-width: 92vw; padding: 8vw 2vw; }
  .display { font-size: 2rem; }
  button { padding: 12px 10vw; }
}
