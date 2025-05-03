import { FC } from "react";
import { Text } from "../../shared/ui/Text";
import styles from "./index.module.css";

export const Blockquote: FC = () => {
  return (
    <section className={styles.wrapper}>
      <Text className={styles.quote} variant="h1" component="h1">
        I'm <Text className={styles.quoteHighlighter}>unique</Text>, as{" "}
        <Text className={styles.quoteHighlighter}>everyone else</Text>.
      </Text>
    </section>
  );
};
