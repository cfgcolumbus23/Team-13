import os

from sqlalchemy import create_engine


db_password = os.getenv("PASSWORD")
if db_password is None:
    print("The environment variable is not set.")
db_string = "mysql+pymysql://1rjddo8gh9fcptpsuhlt:" + str(db_password) + \
    "@aws.connect.psdb.cloud/codeforgood?charset=utf8mb4"


engine = create_engine(
    db_string,
    connect_args={
        "ssl": {
            "ca": "certs/cert.pem"
        }
    }
)
