import Button from "../Button";
import { useUser } from "src/context/UserContext";
import LoginButton from "../LoginButton";

const SubmitRsvpSection = ({
  text,
  handleSubmit,
  loading,
  disabled,
}: {
  text?: string;
  handleSubmit: React.MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
  disabled?: boolean;
}) => {
  const { fetchedUser: user } = useUser();
  const { isSignedIn } = user;

  return (
    <div className="mt-6">
      <div className="flex flex-col gap-2">
        <span className="font-primary text-sm font-light lowercase italic">
          {text}
        </span>
        {!isSignedIn ? (
          <LoginButton />
        ) : (
          <Button
            handleClick={handleSubmit}
            disabled={disabled}
            displayLoading={loading}
            buttonText={`RSVP`}
            className="mt-3 w-full"
          />
        )}
      </div>
    </div>
  );
};

export default SubmitRsvpSection;
